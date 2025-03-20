"use client";

import { type Cuadro } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Bento({ images, className }: { images: Cuadro[], className?: string }) {
    const [listImages, setListImages] = useState<Cuadro[]>(images.slice(0, 10));
    const [count, setCount] = useState(10);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    const searchCheck = () => {
        const query = new URLSearchParams(window.location.search);
        const year = query.get("year");

        const url = year
            ? `/api/cuadros?year=${year}&n=${count}`
            : `/api/cuadros?n=${count}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setListImages(data);
                localStorage.setItem("countCuadro", count.toString());
            })
            .catch(err => console.error(err));
    };

    useEffect(() => {

        const handleDocumentClick = (event: any) => {
            const filterYear = document.getElementById("filter-year");
            if (filterYear && filterYear.contains(event.target)) {
                searchCheck();
            }
        };

        document.addEventListener("click", handleDocumentClick);

        searchCheck();

        // Cleanup al desmontar el componente
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);


    useEffect(() => {
        searchCheck();
    }, [count]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setCount(prevCount => prevCount + 10);
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);

    return (
        <div className={className}>
            <section id="bento-images" className="flex flex-wrap gap-4 justify-center w-full">
                {listImages.map((image, i) => <Cuadro key={i} image={image} i={i} />)}
            </section>
            {/* Loader div at the bottom */}
            <div ref={loaderRef} className="w-full h-10 flex justify-center items-center pt-10">
                <button
                    onClick={() => setCount(count + 10)}
                    className="px-6 py-2 bg-white rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
                >
                    Ver más
                </button>
            </div>
        </div>
    );
}

function Cuadro({ image, i }: { image: Cuadro, i: number }) {
    const min_height = 240; // in px

    let [width, height] = image.dimensiones.split("x").map(dim => parseInt(dim, 10));

    const ratio = Math.max(0.3, Math.min(height / width, 3));
    height = min_height;
    width = min_height / ratio;

    const grow = Math.floor(width * (1000000 / height));
    const basis = Math.floor(min_height * (width / height));

    return (
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
                    priority={i < 10}
                    alt={`Image ${i + 1}`}
                />
                <figcaption></figcaption>
            </Link>
        </figure>
    );
}
