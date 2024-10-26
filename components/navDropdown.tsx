import Link from "next/link";
import { useEffect } from "react";



export default function NavDropdown({ isOpen }: { isOpen: boolean }) {

    useEffect(() => {
        if (isOpen) {
            document.getElementById("nav-dropdown")?.classList.add("animate-fade-in-down");
            setTimeout(() => {
                document.getElementById("about-us-content")?.classList.remove("animate-fade-in-down");
            }, 300);
        } else {
            document.getElementById("nav-dropdown")?.classList.remove("animate-fade-out-down");
        }
    }, [isOpen]);

    return (
        <nav
            id="nav-dropdown"
            className={!isOpen ? "hidden" : "" + " navbar-dropdown-list animate-duration-200 "}
        >
            <ul>
                <li>
                    <button>
                        <Link href={"/"}>INICIO</Link>
                    </button>
                </li>
                <span className="border-b-2 block"></span>
                <li>
                    <button>
                        <Link href={"/"}>OBRAS</Link>
                    </button>
                </li>
                <span className="border-b-2 block"></span>
                <li>
                    <button>
                        <Link href={"/"}>BIOGRAFIA</Link>
                    </button>
                </li>
            </ul>
            <div className="hidden animate-fade-out-down"></div>
        </nav>

    )
}