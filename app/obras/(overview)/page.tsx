import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { ReactElement } from "react";
import { toggle } from "@nextui-org/react";

import PageHeader from "@/components/header";
import Bento from "@/components/bento";
import { fetchCuadros, fetchCuadrosByYear, getYears } from "@/app/lib/data";
import SearchFilters from "@/components/searchBar";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import ScrollUpButton from "@/components/scrollUpButton";


export default async function Obras({ searchParams }: { searchParams: { [key: string]: any | undefined } }): Promise<ReactElement> {

    const n = searchParams.n || undefined; // amount of cuadros to fetch
    const p = searchParams.p || undefined; // padding 
    const year = searchParams.year || undefined; // year to filter

    let cuadros = [];
    
    if(year){
        console.log(year);
        cuadros = (await fetchCuadrosByYear(parseInt(year), n ? parseInt(n) : undefined, p ? parseInt(p) : undefined)).rows;
    }
    else{
        cuadros = (await fetchCuadros(n ? parseInt(n) : undefined, p ? parseInt(p) : undefined)).rows;
    }

    return (
        <div id="main-page" >
            <PageHeader actualPage="obras" />
            <main >
                {/* añadir destacados */}
                <SearchFilters years={await getYears()}></SearchFilters>
                <Bento className="mt-4 md:mt-14 px-10 2xl:px-28" images={cuadros}></Bento>
            </main>
            <ScrollUpButton target="main-page" />
        </div>
    )

}

