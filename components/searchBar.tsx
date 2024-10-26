"use client";

import { Dispatch, ReactElement, SetStateAction, use } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { PlayIcon } from "@heroicons/react/16/solid";
import { AdjustmentsHorizontalIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";



function YearDropdown({ years, isOpen }: { years: number[]; isOpen: boolean }) {
    const [selectedYear, setSelectedYear] = useState<number>(NaN);

    years = Array.from(new Set(years)).filter(year => !Number.isNaN(year));

    useEffect(() => {

        const searchCheck = () => {
            // wait for 0.2s to check if the search params are in the url
            setTimeout(() => {
                const query = new URLSearchParams(window.location.search);
                const year = query.get("year");

                if (year) {
                    // Realizar la acción correspondiente cuando se encuentra el parámetro "year"
                    setSelectedYear(parseInt(year));
                }
                else {
                    setSelectedYear(19999);
                }
            }, 200);
        }

        searchCheck();

        const dropDownFilter = document.getElementById("filter-year")
        if (dropDownFilter) {
            dropDownFilter.onclick = () => {
                searchCheck();
            }
        }

    }, [isOpen]);


    return (
        <div className={` seach-filter-dropdown ${isOpen ? "block" : "hidden"} `}
            id="filter-year"
        >
            <ul className="space-y-2 ">
                {years.map(year => (
                    <li key={year} className="text-center justify-center ">

                        <button className="hover:text-gray-500 items-center mx-auto flex" onClick={
                            () => {
                                // replace url with ?year=${year} (this trigers the popstate) if is already in url remove it
                                if (window.location.search.includes(`year=${year}`)) {
                                    window.history.pushState({}, "", window.location.pathname);
                                }
                                else {
                                    window.history.pushState({}, "", `?year=${year}`);
                                }
                            }
                        }
                        >
                            <PlayIcon className={`h-full w-4 ${selectedYear === year ? "text-black" : "text-transparent"}`}></PlayIcon>
                            {year}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


function YearDropdownMobile({ years, isOpen }: { years: number[]; isOpen: boolean }) {
    const [selectedYear, setSelectedYear] = useState<number>(NaN);

    years = Array.from(new Set(years)).filter(year => !Number.isNaN(year));

    useEffect(() => {

        const searchCheck = () => {
            // wait for 0.2s to check if the search params are in the url
            setTimeout(() => {
                const query = new URLSearchParams(window.location.search);
                const year = query.get("year");

                if (year) {
                    // Realizar la acción correspondiente cuando se encuentra el parámetro "year"
                    setSelectedYear(parseInt(year));
                }
                else {
                    setSelectedYear(19999);
                }
            }, 200);
        }

        searchCheck();

        const dropDownFilter = document.getElementById("filter-year")
        if (dropDownFilter) {
            dropDownFilter.onclick = () => {
                searchCheck();
            }
        }


    }, [isOpen]);


    return (
        <div className={`${isOpen ? "max-h-[500px]" : "max-h-0"} overflow-hidden transition-all duration-300 ease-in-out`}
            id="filter-year"
        >
            <ul className="space-y-1 ml-2 text-left">
                {years.map(year => (
                    <li key={year} className="">

                        <button className="hover:text-gray-500 flex items-center" onClick={
                            () => {
                                // replace url with ?year=${year} (this trigers the popstate) if is already in url remove it
                                if (window.location.search.includes(`year=${year}`)) {
                                    window.history.pushState({}, "", window.location.pathname);
                                }
                                else {
                                    window.history.pushState({}, "", `?year=${year}`);
                                }
                            }
                        }
                        >
                            <PlayIcon className={`h-full w-4 -ml-2 mr-2 ${selectedYear === year ? "text-black" : "text-transparent"}`}></PlayIcon>
                            {year}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function SearchFilters({ years }: { years: number[] }) {



    return (
        <nav className="fixed  w-full text-justify z-[60] md:top-auto top-28">
            <div className="justify-center hidden md:flex space-x-8">
                <SearchButton fixedOpen />
                <FilterButton name="Filtrar" year={years} />
            </div>
            <div className="flex md:hidden justify-center space-x-4">
                <SearchButton />
                <FilterButtonMobile name="Filtrar" year={years} />
            </div>
        </nav>
    )
}


function SearchButton({ fixedOpen }: { fixedOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (isOpen) {
            const input = document.getElementById("search-art");
            if (input) {
                input.focus();
            }
        }
    }, [isOpen]);

    return (
        <div className="flex space-x-2">

            <input id="search-art" type="text"
                placeholder="Buscar obra"
                className={` ${isOpen  ? "w-[200px] md:w-[400px] px-3" : "w-0"} rounded-lg overflow-hidden transition-width duration-700 ease-in-out outline-none py-2 shadow-xl`}
            />

            <button
                className={"flex text-black hover:text-gray-500 font-normal bg-white py-2 px-2 rounded-lg shadow-xl text-xs tracking-[0.2em] items-center uppercase" }
                onClick={() => setIsOpen(!isOpen)}
            >
                <MagnifyingGlassIcon
                    className="h-6  inline-block" />
            </button>

        </div>
    );
}





function FilterButtonMobile({ children, year }: { name: string, children?: ReactElement, year?: number[] }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<number>(NaN);


    return (
        <div className="">
            <button
                className="text-black hover:text-gray-500 font-normal bg-white px-2 py-2 rounded-lg shadow-xl text-xs tracking-[0.2em] items-center uppercase"
                onClick={() => setIsOpen(!isOpen)}

            >
                {/* {name} */}
                <AdjustmentsHorizontalIcon
                    className="h-6 inline-block"
                ></AdjustmentsHorizontalIcon>
            </button>
            {
                isOpen &&
                <div className="fixed top-28 px-4 pb-4 left-0 w-screen h-full">
                    <ul

                        className=" bg-white space-y-4 text-lg flex rounded-lg shadow-xl h-full w-full flex-col py-6 px-12"
                    >
                        <button onClick={() => setIsOpen(false)} className="-mx-6">
                            <XMarkIcon className="h-8"></XMarkIcon>
                        </button>
                        <h3 className="text-center text-2xl pb-3">Filtrar</h3>
                        <li className="border-b-2 border-black pb-2" id="0" >
                            <button onClick={() => setSelected(0)} className="flex items-center justify-between w-full " >
                                Coleccion
                                <ChevronDownIcon
                                    className="h-8 inline-block -my-2 -mr-1 ml-2"
                                ></ChevronDownIcon>
                            </button>
                        </li>
                        <li className="" id="1">
                            <button onClick={() => setSelected(1)} className="flex items-center justify-between w-full border-b-2 border-black pb-2">
                                Año
                                <ChevronDownIcon
                                    className={"h-8 inline-block -my-2 -mr-1 ml-2 transition-transform duration-300 ease-in-out" + (selected === 1 ? " rotate-180" : " ")}
                                ></ChevronDownIcon>
                            </button>
                            {
                                <YearDropdownMobile years={year || [NaN]} isOpen={selected === 1} />
                            }
                        </li>
                        <li className="border-b-2 border-black pb-2" id="2">
                            <button onClick={() => setSelected(2)} className="flex items-center justify-between w-full ">
                                Exposicion
                                <ChevronDownIcon
                                    className="h-8 inline-block -my-2 -mr-1 ml-2"
                                ></ChevronDownIcon>
                            </button>
                        </li>

                    </ul>
                </div>
            }
        </div>
    );
}



function FilterButton({ name, children, year }: { name: string, children?: ReactElement, year?: number[] }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<number>(NaN);


    return (
        <div className="relative">
            <button
                className="h-10 flex text-black hover:text-gray-500 font-normal bg-white px-6 rounded-lg shadow-xl text-xs tracking-[0.2em] items-center uppercase"
                onClick={() => setIsOpen(!isOpen)}

            >
                {name}
                <ChevronDownIcon
                    className={"h-8 inline-block -my-2 -mr-1 ml-2" + (isOpen ? " rotate-180" : "") + " transition-transform duration-300 ease-in-out"}
                ></ChevronDownIcon>
            </button>
            {
                isOpen &&
                <ul
                    onMouseLeave={() => setIsOpen(false)}
                    id="dropdown-list" className="absolute top-12 left-0 bg-white shadow-xl rounded-lg space-y-2 flex flex-col py-6 w-full"
                >
                    <li className="px-4" id="0" onMouseEnter={() => setSelected(0)} onMouseLeave={() => setSelected(-1)}>
                        <button onClick={() => setSelected(0)} >
                            Coleccion
                        </button>
                    </li>
                    <li className="relative flex px-4" id="1" onMouseEnter={() => setSelected(1)} onMouseLeave={() => setSelected(-1)}>
                        <button onClick={() => setSelected(1)} >
                            Año
                        </button>
                        {
                            selected === 1 &&
                            <div className="absolute left-full w-full">
                                <YearDropdown years={year || [NaN]} isOpen={selected === 1}></YearDropdown>
                            </div>
                        }
                    </li>
                    <li className="px-4" id="2" onMouseEnter={() => setSelected(2)} onMouseLeave={() => setSelected(-1)}>
                        <button onClick={() => setSelected(2)} >
                            Exposicion
                        </button>
                    </li>

                </ul>
            }
        </div>
    )

}