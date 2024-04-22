"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function SectionMain() {
    return (
        <section>
                <Image
                    loading="eager"
                    src={"/static/img/main2.webp"}
                    alt={" imagen principal"}
                    width={5055}
                    height={3416}
                    className="w-screen h-screen object-cover aspect-video"
                ></Image>
                <div className="absolute space-y-6 md:skew-y-0 top-1/2 left-0 transform -translate-y-1/2 md:flex justify-between w-full">
                    <div className=" bg-gray-200/60 backdrop-blur-lg h-[14rem] 2xl:h-[18rem] items-center grid md:rounded-r-2xl">
                        <h1 className=" text-white text-4xl 2xl:text-5xl font-light text-center md:px-24 2xl:px-32  tracking-[0.2em] ">Ulises Blanco</h1>
                    </div>
                    <nav className="items-center flex w-full md:w-fit md:mx-auto text-center space-x-10">
                        <div className="mx-auto space-x-6">
                            <Link href={"/"}>
                                <button
                                    className="border-white border-2 px-6 py-2 font-light text-xl tracking-widest hover:animate-pulse text-white rounded-xl"
                                >BIO</button>
                            </Link>
                            <Link href={"/obras"}>
                                <button
                                    className="border-white border-2 px-6 py-2 font-light text-xl tracking-widest hover:animate-pulse text-white rounded-xl"
                                >OBRAS</button>
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className="absolute bottom-0 mx-auto w-full text-center">
                    <button onClick={()=>{
                        // scroll to "about" section
                        document.getElementById("about")?.scrollIntoView({behavior:"smooth"})
                    }} >
                        <ChevronDownIcon className="h-14 w-14 mx-auto text-white animate-bounce" />
                    </button>
                </div>
            </section>
    )
}