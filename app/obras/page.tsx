import Link from "next/link";
import PageHeader from "@/components/header";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Bento from "@/components/bento";


export default function Obras() {

    // iterate over 10
    const images = Array.from({ length: 15 }, (_, i) => `/static/img/art/f${i + 1}.JPG`);

    return (
        <div >
            <PageHeader />
            <main className=" flex min-h-screen flex-col" >
                <SearchFilters></SearchFilters>
                <Bento className="mt-14" images={images}></Bento>
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
        <nav className="fixed w-full text-justify z-[60]">
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