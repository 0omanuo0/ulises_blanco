import Link from "next/link";
import { useEffect } from "react";



export default function NavDropdown({isOpen}:{isOpen:boolean}) {

    useEffect(() => {
        if (isOpen) {
            document.getElementById("nav-dropdown")?.classList.add("animate-fade-in-down");
            setTimeout(() => {
                document.getElementById("about-us-content")?.classList.remove("animate-fade-in-down");
            }, 300);
        } else {
            document.getElementById("nav-dropdown")?.classList.remove("animate-fade-out-down");
        }
    },[isOpen]);
    return (
        <nav id="nav-dropdown" className=" animate-duration-300 text-right ml-auto bg-white rounded-xl shadow-xl w-fit p-6 mt-2">
            <ul className=" text-lg font-normal tracking-widest list-none space-y-2 text-center">
                <li>
                    <button className="w-fit hover:animate-pulse text-black">
                        <Link href={"/"}>INICIO</Link>
                    </button>
                </li>
                <span className="border-b-2 block"></span>
                <li>
                    <button className=" w-fit hover:animate-pulse text-black">
                        <Link href={"/"}>OBRAS</Link>
                    </button>
                </li>
                <span className="border-b-2 block"></span>
                <li>
                    <button className=" w-fit hover:animate-pulse text-black">
                        <Link href={"/"}>BIOGRAFIA</Link>
                    </button>
                </li>
            </ul>
        </nav>
    )
}