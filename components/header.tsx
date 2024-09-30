"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import NavDropdown from "@/components/navDropdown";


enum pages{
    INICIO = "inicio",
    OBRAS = "obras",
    BIOGRAFIA = "biografia"
}


export default function PageHeader( {actualPage}:{actualPage?: string}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className="header-nav">
                <div id="header-container">
                    <h1 className="header-title">ULISES BLANCO</h1>
                    <nav>
                        <button className=" header-nav-link">
                            <Link href={"/"}>INICIO</Link>
                        </button>
                        <div className="border-r-2 border-black h-6"></div>
                        <button className={`header-nav-link ${actualPage === pages.OBRAS ? " font-normal" : ""}`}>
                            <Link href={"/obras"}>OBRAS</Link>
                        </button>
                        <button className={`header-nav-link ${actualPage === pages.BIOGRAFIA ? " font-normal" : ""}`}>
                            <Link href={"/biografia"}>BIOGRAFIA</Link>
                        </button>
                    </nav>
                    <div id="navbar-dropdown" >
                        <button  onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Bars3Icon className="h-8 w-8" />
                        </button>
                    </div>
                </div>
                {
                    isMenuOpen ? <NavDropdown isOpen={isMenuOpen} /> : <></>
                }


            </header>
            <div className="h-32 w-2 "></div>
        </>
    )
}