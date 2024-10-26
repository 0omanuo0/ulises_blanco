import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ButtonScrollDown from "./buttonScolldown";

export default function SectionMain() {
    return (
        <section
            style={{
                backgroundImage: "url('/static/img/main2_ulowres.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh",
            }}
        >
            <Head>
                <link rel="preload" href="/static/img/main2_ulowres.webp" as="image" />
            </Head>
            
            {/* Imagen de alta resolución para la vista completa */}
            <Image
                src="/static/img/main2.webp"
                alt="Imagen principal"
                width={2000}
                height={1000}
                priority
                className="w-screen h-screen object-cover aspect-video"
                placeholder="blur"
                blurDataURL="/static/img/main2_ulowres.webp"
            />

            {/* Contenido estático */}
            <div className="landing-content">
                <div className="landing-content-left">
                    <h1>Ulises Blanco</h1>
                </div>
                <nav className="nav-main">
                    <div className="mx-auto space-x-6">
                        <Link href="/">BIO</Link>
                        <Link href="/obras">OBRAS</Link>
                    </div>
                </nav>
            </div>

            {/* Botón para desplazarse a la sección "about" */}
            <ButtonScrollDown />
        </section>
    );
}
