import Image from "next/image";



export default function Obra({params}:{params:{id:string}}){
    return (
        <div>
            <h1>Obra {params.id}</h1>
            <img src={`/static/img/art/cuadro-${params.id}.webp`} alt={" imagen principal"} width={5055} height={3416} className="w-screen h-screen object-cover aspect-video"></img>
        </div>
    )
}