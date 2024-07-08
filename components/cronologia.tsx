"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import ScrollUpButton from "@/components/scrollUpButton";



export default function Cronology() {
    const [cronology, setCronology] = useState<{ [key in string]: string[] }>({"Cargando":[]});

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
            <ScrollUpButton target="about" />
            <CardHeader
                className="text-4xl font-light text-center justify-center tracking-[0.2em] first:animate-slide-in-top"
            >
                Cronología
            </CardHeader>
            <CardBody className=" last:animate-slide-in-top" >
                <ol id="cronology" className="cronology">
                    {
                        Object.entries(cronology).map(
                            ([year, events]) => (
                                <li key={year}>
                                    <h2>{year}</h2>
                                    <ul >
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

