import Image from "next/image";
import { fetchCuadro, Cuadro } from '@/app/lib/data';
import { redirect } from "next/navigation";



export default async function Obra({ params }: { params: { id: string } }) {
    const cuadro = (await fetchCuadro(parseInt(params.id))).rows;
    return (
        <div>
            {/* <div className="fixed items-center text-center justify-between h-full w-full">
                <button className="bg-black text-white p-4">Back</button>
                <button className="bg-black text-white p-4">Next</button>
            </div> */}
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
                        </div> : <div><h1>{params.id}</h1><p>Not in db</p></div>
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