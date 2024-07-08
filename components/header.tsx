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
                        <div className="border-r-2 border-black h-8"></div>
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
            <div
                className="fixed h-36 full w-full top-0 left-0 z-10 bg-gray-200"
                // add linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 0) 100%) and also a blur in the gradient
                style={
                    {
                        background: "linear-gradient(180deg, rgba(229, 231, 235, 1) 20%, rgba(0, 0, 0, 0) 100%)",
                        backdropFilter: "blur(40px)",
                        mask: "linear-gradient(180deg, rgba(255, 255, 255, 1) 70%, rgba(0, 0, 0, 0) 100%)"
                    }}
            ></div>
            <div className="h-36 w-2 "></div>
        </>
    )
}