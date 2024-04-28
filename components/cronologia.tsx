"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";



export default function Cronology() {
    const [cronology, setCronology] = useState<{ [key in string]: string[] }>({});

    useEffect(() => {
        const cronology = async () => {
            const response = await fetch("/api/cronology");
            const data = await response.json();
            setCronology(data);
        }
        cronology();

        // check if cronology is in screen, if not, hide scroll-up button
        const scrollUp = document.getElementById("scroll-up");
        const handleScroll = () => {
            if (scrollUp && window.scrollY > 100) {
                scrollUp.style.display = "block";
            } else {
                scrollUp?.style.setProperty("display", "none", "important");
            }
        }
        window.addEventListener("scroll", handleScroll);

    }, [])

    return (
        <Card className="bg-transparent shadow-none justify-center md:mx-32">
            <button id="scroll-up" className="fixed bottom-8 right-8 z-50 bg-white shadow-xl text-black p-2 rounded-full"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
                <ChevronUpIcon className="h-8" />
            </button>
            <CardHeader
                className="text-4xl font-light text-center justify-center tracking-[0.2em] first:animate-slide-in-top"
            >

                Cronología
            </CardHeader>
            <CardBody className=" last:animate-slide-in-top" >
                <ol id="cronology" className="space-y-6 text-center mx-auto pt-8">
                    {
                        Object.entries(cronology).map(
                            ([year, events]) => (
                                <li key={year} className="space-y-2 text-left w-fit">
                                    <h2 className="text-2xl font-light border-b-2 border-gray-300 w-fit px-2">{year}</h2>
                                    <ul className="space-y-2 ml-4">
                                        {
                                            events.map((event, i) => (
                                                <li key={i}>- {event}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            )
                        )
                    }
                </ol>
            </CardBody>
        </Card>
    )
}

