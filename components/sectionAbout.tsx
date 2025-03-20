
"use client";

import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Cronology from "@/components/cronologia";
import { useEffect, useState } from "react";

export default function SectionAbout() {

    useEffect(() => {
        const tabs = document.getElementById("about");

        const handleScroll = () => {

            if (tabs) {
                if (window.scrollY > tabs.offsetTop) {
                    // setTimeout(()=>document.getElementById("about")?.classList.add("mt-20"), 300);
                    document.getElementById("tabs-data")?.classList.add("set-top")
                } else if(window.scrollY - 200 < tabs.offsetTop) {
                    document.getElementById("tabs-data")?.classList.remove("set-top");
                    // setTimeout(()=>document.getElementById("about")?.classList.remove("mt-20"), 300);
                }
            }
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
        <section id="about" className="section-about transition-transform duration-400">
            <Tabs key={"a"} size={"lg"} id="tabs-data" aria-label="Tabs sizes" className="transition-all duration-300">
                <Tab key="Biografia" title="Biografia">
                    <About />
                </Tab>
                <Tab key="Cronologia" title="Cronologia" >
                    <Cronology />
                </Tab>
                <Tab key="Otros" title="Otros" >
                    <About />
                </Tab>
            </Tabs>
        </section>
    )
}



function About() {

    return (

        <Card className="bg-transparent shadow-none justify-center md:mx-32">
            <CardHeader
                className="text-4xl font-light text-center justify-center tracking-[0.2em]"
            >
                Ulises Blanco
            </CardHeader>
            <CardBody>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate?</p>
            </CardBody>
        </Card>
    )
}

