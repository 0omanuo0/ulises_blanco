import Image from "next/image";
import { fetchCuadro, Cuadro } from '@/app/lib/data';



export default async function Obra({ params }: { params: { id: string } }) {
    const cuadro = (await fetchCuadro(parseInt(params.id))).rows;
    console.log(cuadro);
    return (
        <div>
            <h1>Obra {params.id}</h1>
            {
                cuadro.length > 0 ?
                    <ul className="flex text-black space-x-2">
                        <li>
                            {cuadro[0].titulo + " "}
                        </li>
                        <li>
                            {"(" + cuadro[0].coleccion + "), "}
                        </li>
                        <li>
                            {cuadro[0].año + " "}
                        </li>
                        <li>
                            {cuadro[0].dimensiones}
                        </li>
                    </ul> : <p>Not in db</p>
            }
            <img src={`/static/img/art/cuadro-${params.id}.webp`} alt={" imagen principal"} width={5055} height={3416} className="w-screen h-screen object-cover aspect-video"></img>
        </div>
    )
}