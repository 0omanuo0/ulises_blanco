"use client";

import { Dispatch, ReactElement, SetStateAction, use } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { PlayIcon } from "@heroicons/react/16/solid";



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
        <div className={`absolute top-12 text-center left-0 w-full bg-white shadow-xl rounded-xl p-4 pl-0 ${isOpen ? "block" : "hidden"} `}
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

export default function SearchFilters({ years }: { years: number[] }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed hidden md:block w-full text-justify z-[60]">
            <ul className="flex justify-center space-x-10">
                <FilterButton name="COLECCION"></FilterButton>
                <FilterButton setIsOpen={() => {
                    setIsOpen(!isOpen)
                }} name="AÑO" ><YearDropdown years={years} isOpen={isOpen} /></FilterButton>
                <FilterButton name="EXPOSICION"></FilterButton>
            </ul>
        </nav>
    )
}

function FilterButton({ name, children, setIsOpen }: { name: string, children?: ReactElement, setIsOpen?: () => void }) {

    return (
        <li className="relative">
            <button
                className="text-black hover:text-gray-500 font-normal bg-white px-6 py-2 rounded-lg shadow-xl text-xs tracking-[0.2em] items-center"
                onClick={setIsOpen}
            >
                {name}
                <ChevronDownIcon className="h-8 inline-block -my-2 -mr-1 ml-2"></ChevronDownIcon>
            </button>
            {children}
        </li>
    )
}