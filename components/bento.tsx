"use client";

import { type Cuadro } from "@/app/lib/data";
import { randomInt } from "crypto";
import Image from "next/image"
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";

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
    const [list_images, setListImages] = useState<ReactElement[]>([]);



    useEffect(() => {
        const searchCheck = () => {
            console.log("searchCheck");
            // wait for 0.2s to check if the search params are in the url
            setTimeout(() => {
                const query = new URLSearchParams(window.location.search);
                const year = query.get("year");

                if (year) {
                    // Realizar la acción correspondiente cuando se encuentra el parámetro "year"
                    setSearchParams({ typeSearch: SearchType.YEAR, valueSearch: year });
                    const filteredImages = images.filter(image => image.año === parseInt(year));
                    setListImages(RenderImages(filteredImages));
                }
                else {
                    setListImages(RenderImages(images));
                }
            }, 200);
        };

        document.getElementById("filter-year")?.addEventListener("click", () =>  searchCheck());

        searchCheck();

    }, []);

    return (
        <div className={className}>
            {/* <div className={`${hover ? 'block' : 'hidden'} fixed w-full h-full z-[100] bg-black/60 inset-0 ${hover ? 'pointer-events-none' : ''}`}></div> */}
            <ul className="space-y-4 mx-auto lg:space-y-0 lg:grid lg:grid-cols-4 text-center w-full md:w-1/2 lg:w-full lg:gap-4 auto-cols-[30rem]">
                {list_images}
            </ul>
        </div>
    )
}


function RenderImages(images: Cuadro[]) {
    let acumulator = 1;
    let before = false;
    const list_images = images.map((image, i) => {
        // state probaby wide
        let candidateWide = Math.floor(Math.random() * 3) === 0;
        let isWide = (acumulator < 4 || acumulator % 4 !== 0) && candidateWide && !before;
        if (!Number.isNaN(image.año)) {
            const ratio = parseFloat(image.dimensiones.split("x")[0]) / parseFloat(image.dimensiones.split("x")[1]);
            candidateWide = ratio > 1.25 ? true : false;
            isWide = (acumulator < 4 || acumulator % 4 !== 0) && candidateWide;
        }

        acumulator += isWide ? 2 : 1;
        before = isWide;

        return (
            <li
                className={`hover:scale-110 2xl:hover:scale-105 transition-all duration-500 ease-in-out relative list-none  ${isWide ? "col-span-2" : ""}`}
                key={i}

            >
                <Link href={`/obras/${i + 1}`}>
                    <img
                        width={1000} height={500}
                        src={image.imgpath}
                        loading={i < 10 ? "eager" : "lazy"}
                        // priority={i < 10 ? true : false}
                        alt={`Image ${i + 1}`}
                        className="object-cover w-full h-[20rem] rounded-xl z-[300] hover:z-[500]"
                    />
                    <div className="absolute h-full inset-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>
                </Link>
            </li>
        )
    });

    return list_images;
}