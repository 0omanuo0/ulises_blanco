import Image from "next/image";
import { fetchCuadro, Cuadro } from '@/app/lib/data';
import { redirect } from "next/navigation";
import NavBarImages from "@/components/navBarImages";



export default async function Obra({ params }: { params: { id: string } }) {
    const cuadro = (await fetchCuadro(parseInt(params.id))).rows;
    return (
        <div>
            <NavBarImages id={parseInt(params.id)} />
            <main className="px-32 items-center h-screen py-10">

                {
                    cuadro.length > 0 ?
                        <div className="absolute bg-white/50 px-8 py-4 text-neutral-800 backdrop-blur-lg min-w-[30%] space-y-1">
                            <h1 className="text-black text-2xl tracking-widest">{cuadro[0].titulo}</h1>
                            <ul className="flex space-x-3">

                                <li>
                                    {cuadro[0].año}
                                </li>
                                <span>|</span>
                                <li>
                                    {cuadro[0].dimensiones}
                                </li>
                                <span>|</span>
                                <li>
                                    {cuadro[0].material}
                                </li>
                            </ul>
                        </div>
                        : <div className="absolute bg-white/50 px-8 py-4 text-neutral-800 backdrop-blur-lg min-w-[30%] space-y-1">
                            <h1 className="text-black text-2xl tracking-widest">Title: {params.id}</h1><p>Not in db</p>
                        </div>
                }
                <img
                    src={`/static/img/art/cuadro-${params.id}.webp`}
                    alt={" imagen principal"} width={5055} height={3416}
                    className="w-screen object-cover aspect-video h-full"
                ></img>
            </main>
        </div>
    )
}