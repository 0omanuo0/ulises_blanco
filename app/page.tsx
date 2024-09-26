"use client";
import SectionMain from "@/components/sectionMain";
import SectionAbout from "@/components/sectionAbout";
import { useEffect, useState } from "react";
import IconSign from "@/components/iconSign";

function Loader({ className }: { className?: string }) {
    return (
        <div className={className}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 500,
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
            }}
        >
            <div
                className="animate-sink animate-iteration-count-infinite"
                style={{
                    backgroundColor: "white",
                    opacity: 0.7,
                    padding: "10px",
                    height: "200px",
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                }}
            >
                <IconSign style={{ rotate: "-20deg" }} color="black"></IconSign>
            </div>
        </div>
    );
}


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Se asegura de que la página y las hojas de estilo se carguen completamente
        const handleComplete = () => {
            setTimeout(() => {
                setLoading(false);
            }, 20);
            setShow(true);
        }

        if (document.readyState === "complete") {
            // Si la página ya está completamente cargada
            handleComplete();
        } else {
            // De otra manera, se agrega el evento
            window.addEventListener("load", handleComplete);
        }

        return () => {
            window.removeEventListener("load", handleComplete);
        };
    }, []);

    return (
        <>
            <Loader className={loading ? "opacity-100 backdrop-blur-3xl" : "opacity-0 backdrop-blur-0" + " transition-all duration-700 pointer-events-none"} />
            <main
                className={` bg-gray-200 items-center justify-between ${show ? "opacity-100" : "opacity-0 "} `}
            >
                <SectionMain />
                <SectionAbout />
            </main>
        </>
    );
}
