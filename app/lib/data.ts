import { sql } from "@vercel/postgres";

export type Cuadro = {
    id: number;
    titulo: string;
    coleccion: string;
    año: number;
    dimensiones: string;
    descripcion: string;
    material: string;
    imgpath: string;
}

export async function fetchCuadro(id:number) {
    const cuadro = await sql<Cuadro>`
        SELECT * FROM catalogo WHERE id = ${id};
    `;

    return cuadro;
}

export async function fetchCuadros(amount?:number, start?:number) {

    if (amount) {
        const startParam = start || 0;
        const cuadros = await sql<Cuadro>`
            SELECT * FROM catalogo ORDER BY id LIMIT ${amount} OFFSET ${startParam};
        `;
        return cuadros;
    }

    const cuadros = await sql<Cuadro>`SELECT * FROM catalogo;`;
    return cuadros;
}

export async function fetchCuadrosByYear(year:number, amount?:number, start?:number) {
    if (amount) {
        const startParam = start || 0;
        const cuadros = await sql<Cuadro>`
            SELECT * FROM catalogo WHERE año = ${year} ORDER BY id LIMIT ${amount} OFFSET ${startParam};
        `;
        return cuadros;
    }

    const cuadros = await sql<Cuadro>`SELECT * FROM catalogo WHERE año = ${year};`;
    return cuadros;
}

export async function getEvents() {
    const data = await sql`
        SELECT * FROM cronology ORDER BY year DESC;
    `;
    // is a list that each element contains id, year and events (an array of strings)

    // the iteration must return an object with the year as key and the events as value
    const events = data.rows.reduce((acc, curr) => {
        acc[curr.year] = curr.events;
        return acc;
    }, {});

    return events;
}