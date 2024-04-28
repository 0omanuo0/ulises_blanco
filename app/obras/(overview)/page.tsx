import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { ReactElement } from "react";
import { toggle } from "@nextui-org/react";

import PageHeader from "@/components/header";
import Bento from "@/components/bento";
import { fetchCuadros } from "@/app/lib/data";
import SearchFilters from "@/components/searchBar";
import { useSearchParams } from "next/navigation";


export default async function Obras() {

    // get the query params "year" from the url
    // const query = useSearchParams();
    // const year = query.get("year");

    const cuadros = (await fetchCuadros()).rows;

    // iterate over from cuadros.length to 54 and append Cuadro objects to the array everything undefined but imgpath `https://storage.manu365.dev/art/cuadro-${i + 1}.webp
    const cuadrosLength = cuadros.length;
    for (let i = cuadrosLength; i < 54; i++) {
        cuadros.push({
            id: i + 1,
            titulo: "",
            coleccion: "",
            año: NaN,
            dimensiones: "100x100",
            descripcion: "",
            material: "",
            imgpath: `https://storage.manu365.dev/art/cuadro-${i + 1}.webp`
        })
    }

    // get años
    const años = cuadros.map(cuadro => cuadro.año);
    

    return (
        <div >
            <PageHeader />
            <main className=" flex min-h-screen flex-col" >
                <SearchFilters years={años}></SearchFilters>
                <Bento className="mt-4 md:mt-14 px-10 2xl:px-28" images={cuadros}></Bento>
            </main>
            <div
                className="fixed h-40 full w-full top-0 left-0 z-10 bg-gray-200"
                // add linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 0) 100%) and also a blur in the gradient
                style={
                    {
                        background: "linear-gradient(180deg, rgba(229, 231, 235, 1) 20%, rgba(0, 0, 0, 0) 100%)",
                        backdropFilter: "blur(40px)",
                        mask: "linear-gradient(180deg, rgba(255, 255, 255, 1) 70%, rgba(0, 0, 0, 0) 100%)"
                    }}
            ></div>
        </div>
    )

}

