
"use client";

import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Cronology from "@/components/cronologia";

export default function SectionAbout() {

    return (
        <section className="bg-gray-200 items-center text-center pt-10 w-full min-h-screen space-y-6 ">
            <Tabs key={"a"} size={"lg"} aria-label="Tabs sizes">
                <Tab key="Biografia" title="Biografia">
                    <About />
                </Tab>
                <Tab key="Cronologia" title="Cronologia" >
                    <Cronology />
                </Tab>
                <Tab key="Otros" title="Otros" >
                    <Card>
                        <CardHeader>Otros</CardHeader>
                        <CardBody>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate?</p>
                        </CardBody>
                    </Card>
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

