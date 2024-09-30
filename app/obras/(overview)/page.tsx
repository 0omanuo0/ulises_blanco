import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { ReactElement } from "react";
import { toggle } from "@nextui-org/react";

import PageHeader from "@/components/header";
import Bento from "@/components/bento";
import { fetchCuadros } from "@/app/lib/data";
import SearchFilters from "@/components/searchBar";
import { useSearchParams } from "next/navigation";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import ScrollUpButton from "@/components/scrollUpButton";


export default async function Obras() {

    // get the query params "year" from the url
    // const query = useSearchParams();
    // const year = query.get("year");

    const cuadros = (await fetchCuadros(10)).rows;

    // get años
    const años = cuadros.map(cuadro => cuadro.año);
    

    return (
        <div id="main-page" >
            <PageHeader actualPage="obras"/>
            <main >
                {/* añadir destacados */}
                <SearchFilters years={años}></SearchFilters>
                <Bento className="mt-4 md:mt-14 px-10 2xl:px-28" images={cuadros}></Bento>
            </main>
            <ScrollUpButton target="main-page" />
        </div>
    )

}

