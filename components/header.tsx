"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import NavDropdown from "@/components/navDropdown";




export default function PageHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className=" fixed p-4 md:p-10 top-0 left-0 w-full z-50"

            >
                <div className="bg-white w-full h-24 flex items-center justify-between px-6 md:px-20 rounded-xl shadow-2xl">
                    <h1 className="text-black border-b-2 pb-1 text-lg md:text-xl border-black tracking-widest">ULISES BLANCO</h1>
                    <nav className=" hidden space-x-10 lg:flex items-center">
                        <button className="border-none w-fit border-2 h-fit font-light text-lg tracking-widest hover:animate-pulse text-black ">
                            <Link href={"/"}>INICIO</Link>
                        </button>
                        <div className="border-r-2 border-black h-8"></div>
                        <button className="border-none w-fit border-2 h-fit font-light text-lg tracking-widest hover:animate-pulse text-black ">
                            <Link href={"/"}>OBRAS</Link>
                        </button>
                        <button className="border-none w-fit border-2 h-fit font-light text-lg tracking-widest hover:animate-pulse text-black ">
                            <Link href={"/"}>BIOGRAFIA</Link>
                        </button>
                    </nav>
                    <div className="lg:hidden items-center h-fit">
                        <button className="border-none w-fit border-2 animate-pulse text-black "
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Bars3Icon className="h-8 w-8" />
                        </button>
                    </div>
                </div>
                {
                    isMenuOpen ? <NavDropdown isOpen={isMenuOpen} /> : <></>
                }
                
            </header>
            <div className="h-36 w-2 "></div>
        </>
    )
}