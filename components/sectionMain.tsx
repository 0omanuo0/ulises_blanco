"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function SectionMain() {
    return (
        <section>
            <Head>
                <link rel="preload" href={"/static/img/main2.webp"} as="image" />
            </Head>
            <Image
                src={"/static/img/main2.webp"}
                alt={" imagen principal"}
                width={2000}
                height={1000}
                priority
                className="w-screen h-screen object-cover aspect-video"
            ></Image>
            <div className="landing-content">
                <div className="landing-content-left">
                    <h1>Ulises Blanco</h1>
                </div>
                <nav className="nav-main">
                    <div className="mx-auto space-x-6">
                        <Link href={"/"}>BIO</Link>
                        <Link href={"/obras"}>OBRAS</Link>
                    </div>
                </nav>
            </div>
            <div className="scroll-down">
                <button onClick={() => {
                    // scroll to "about" section
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }} >
                    <ChevronDownIcon />
                </button>
            </div>
        </section>
    )
}