"use client";

import Link from "next/link";
import { redirect } from "next/navigation";



export default function NavBarImages({ id }: { id: number }) {
    return (
        <div className="fixed  h-screen w-screen">
            <nav className="flex items-center text-center justify-between h-full w-full">
                {
                    id > 1 ?
                        <Link
                            href={`/obras/${id - 1}`}
                            className="bg-gray-800 rounded-xl shadow-2xl hover:bg-gray-600 transition-colors duration-300 ease-in-out mx-10 px-6 text-white py-4"
                        >
                            {"<"}
                        </Link> : <span></span>
                }
                <Link href={`/obras/${id + 1}`} className="bg-gray-800 rounded-xl shadow-2xl hover:bg-gray-600 transition-colors duration-300 ease-in-out mx-10 px-6 text-white py-4">{">"}</Link>
            </nav>
        </div>
    )
}