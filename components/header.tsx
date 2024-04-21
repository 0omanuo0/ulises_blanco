import Link from "next/link";


export default function PageHeader() {
    return (
        <>
            <header className=" fixed p-10 top-0 left-0 w-full z-50"

            >
                <div className="bg-white w-full h-24 flex items-center justify-between px-20 rounded-xl shadow-2xl">
                    <h1 className="text-black border-b-2 pb-1 text-xl border-black tracking-widest">ULISES BLANCO</h1>
                    <nav className="space-x-10 flex items-center">
                        <button className="border-none w-fit border-2 h-fit font-light text-lg tracking-widest hover:animate-pulse text-black ">
                            <Link href={"/"}>INICIO</Link>
                        </button>
                        <div className="border-r-2 border-black h-8"></div>
                        <button className="border-none w-fit border-2 h-fit font-light text-lg tracking-widest hover:animate-pulse text-black ">
                            <Link href={"/"}>OBRAS</Link>
                        </button>
                        <button className="border-none w-fit border-2 h-fit font-light text-lg tracking-widest hover:animate-pulse text-black ">
                            <Link href={"/"}>BIOGRAFIA</Link>
                        </button>
                    </nav>
                </div>
            </header>
            <div className="h-36 w-2 "></div>
        </>
    )
}