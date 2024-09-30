"use client";

import { type Cuadro } from "@/app/lib/data";
import { randomInt } from "crypto";
import Image from "next/image"
import Link from "next/link";
import { ReactElement, use, useEffect, useState } from "react";

enum SearchType {
    YEAR = "year",
    TITLE = "title",
    MATERIAL = "material",
    DIMENSION = "dimension"
}

interface StateSearch {
    typeSearch: SearchType;
    valueSearch: string;
}


export default function Bento({ images, className }: { images: Cuadro[], className?: string }) {

    const [searchParams, setSearchParams] = useState<StateSearch>();
    const [list_images, setListImages] = useState<Cuadro[]>(images);
    const [count, setCount] = useState(10);

    const searchCheck = () => {
        // wait for 0.2s to check if the search params are in the url
        setTimeout(() => {
            const query = new URLSearchParams(window.location.search);
            const year = query.get("year");

            if (year) {
                setSearchParams({ typeSearch: SearchType.YEAR, valueSearch: year });
                
                fetch(`/api/cuadros?year=${year}&n=${count}`)
                    .then(res => res.json())
                    .then(data => {
                        setListImages(data);
                        localStorage.setItem("countCuadro", count.toString());
                    })
                    .catch(err => console.error(err));
            }
            else{
                fetch(`/api/cuadros?n=${count}`)
                .then(res => res.json())
                .then(data => {
                    setListImages(data);
                    localStorage.setItem("countCuadro", count.toString());
                })
                .catch(err => console.error(err));
            }
        }, 200);
    };

    useEffect(() => {
        const countStorage = localStorage.getItem("countCuadro");
        if (countStorage) {
            setCount(parseInt(countStorage));
        }

        document.getElementById("filter-year")?.addEventListener("click", () => searchCheck());

        searchCheck();
    }, []);

    useEffect(() => {
        searchCheck();        
    }, [count]);

    return (
        <div className={className + ""}>
            {/* <div className={`${hover ? 'block' : 'hidden'} fixed w-full h-full z-[100] bg-black/60 inset-0 ${hover ? 'pointer-events-none' : ''}`}></div> */}
            {/* <ul className="space-y-4 mx-auto lg:space-y-0 lg:grid lg:grid-cols-4 text-center w-full md:w-1/2 lg:w-full lg:gap-4 auto-cols-[30rem]">
                {list_images}
            </ul> */}
            <section className="flex flex-wrap gap-4 justify-center w-full">
                {
                    list_images.map((image, i) => <Cuadro key={i} image={image} i={i} />)
                }
            </section>
            <div className="flex justify-center pt-10">
                <button
                    onClick={() => setCount(count + 10)}
                    className="px-6 py-2 bg-white rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
                >
                    Ver más
                </button>
            </div>
        </div>
    )
}


function Cuadro({ image, i }: { image: Cuadro, i: number }) {
    const min_height = 240; // in px


    let [width, height] = image.dimensiones.split("x").map(dim => parseInt(dim, 10)); // is in cm

    // Normalize converting to px, can be dimensions extremely large and small, so the height and width need to be calculated with the ratio
    // If ratio is smaller than 0.3 or bigger than 3, then cramp it to 0.3 or 3
    const ratio = Math.max(0.3, Math.min(height / width, 3));
    height = min_height;
    width = min_height / ratio;

    const grow = Math.floor(width * (1000000 / height));
    const basis = Math.floor(min_height * (width / height));

    return (
        // Justified grid gallery
        <figure
            key={i}
            style={{
                flexBasis: `${basis}px`,
                flexGrow: grow,
            }}
            className="bento-figure"
        >
            <Link href={`/obras/${i + 1}`}>
                <Image
                    width={500} height={250}
                    src={image.imgpath}
                    loading={i < 10 ? "eager" : "lazy"}
                    priority={i < 10 ? true : false}
                    alt={`Image ${i + 1}`}
                />
                <figcaption className=""></figcaption>
            </Link>
        </figure>
    );


}

