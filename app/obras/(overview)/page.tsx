import Link from "next/link";
import PageHeader from "@/components/header";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Bento from "@/components/bento";
import { fetchCuadros } from "@/app/lib/data";


export default async function Obras() {

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
    

    return (
        <div >
            <PageHeader />
            <main className=" flex min-h-screen flex-col" >
                <SearchFilters></SearchFilters>
                <Bento className="mt-4 md:mt-14 px-10" images={cuadros}></Bento>
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

function SearchFilters() {
    return (
        <nav className="fixed hidden w-full text-justify z-[60]">
            <ul className="flex justify-center space-x-10">
                <FilterButton name="COLECCION"></FilterButton>
                <FilterButton name="AÑO"></FilterButton>
                <FilterButton name="EXPOSICION"></FilterButton>
            </ul>
        </nav>
    )
}

function FilterButton({ name }: { name: string }) {
    return (
        <li>
            <button
                className="text-black hover:text-gray-500 font-normal bg-white px-6 py-2 rounded-lg shadow-xl text-xs tracking-[0.2em] items-center"
            >
                {name}
                <ChevronDownIcon className="h-8 inline-block -my-2 -mr-1 ml-2"></ChevronDownIcon>
            </button>
        </li>
    )
}