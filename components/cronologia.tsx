"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";



export default function Cronology() {
    const [cronology, setCronology] = useState<{ [key in string]: string[] }>({});

    useEffect(() => {
        const cronology = async () => {
            const response = await fetch("/api/cronology");
            const data = await response.json();
            setCronology(data);
        }
        cronology();
    }, [])

    return (
        <Card className="bg-transparent shadow-none justify-center mx-32">
            <CardHeader
                className="text-4xl font-light text-center justify-center tracking-[0.2em]"
            >
                Cronología
            </CardHeader>
            <CardBody>
                <ol className="space-y-6 text-center mx-auto pt-8">
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

