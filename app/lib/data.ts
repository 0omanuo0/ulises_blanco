import { sql } from "@vercel/postgres";

export type Cuadro = {
    id: number;
    titulo: string;
    coleccion: string;
    año: number;
    dimensiones: string;
    descripcion: string;
    material: string;
    imgPath: string;
}

export async function fetchCuadro(id:number) {
    const cuadro = await sql<Cuadro>`
        SELECT * FROM catalogo WHERE id = ${id};
    `;

    return cuadro;
}