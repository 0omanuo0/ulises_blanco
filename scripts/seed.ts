const { db } = require('@vercel/postgres');
const {
    cuadros,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

type Cuadro = {
    titulo: string;
    coleccion: string;
    año: number;
    dimensiones: string;
    descripcion: string;
    material: string;
    imgPath: string;
};

async function seedCatalogo(client : any) {
    try {
        // check if the table exists and remove it if it does

        const existingTable = await client.query(`
            SELECT to_regclass('catalogo');
        `);

        if (existingTable.rows[0].to_regclass) {
            console.log('Dropping "catalogo" table');
            await client.query(`
                DROP TABLE catalogo;
            `);
        }

        const createTable = await client.sql`
            CREATE TABLE catalogo (
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                coleccion VARCHAR(100),
                año INTEGER,
                dimensiones VARCHAR(100),
                descripcion TEXT,
                material VARCHAR(100),
                imgPath VARCHAR(255)
            );
            `;


        console.log(`Created "catalogo" table`);

        // Insert data into the "revenue" table
        const insertedCuadros = await Promise.all(
            cuadros.map(
                (cuadro:Cuadro) => client.sql`
            INSERT INTO catalogo (titulo, coleccion, año, dimensiones, descripcion, material, imgPath)
                VALUES (${cuadro.titulo}, ${cuadro.coleccion}, ${cuadro.año}, ${cuadro.dimensiones}, ${cuadro.descripcion}, ${cuadro.material}, ${cuadro.imgPath})
                ON CONFLICT DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedCuadros.length} cuadros`);

        return {
            createTable,
            cuadros: insertedCuadros,
        };
    } catch (error) {
        console.error('Error seeding catalogo:', error);
        throw error;
    }
}

async function main() {
    const client : any
     = await db.connect();

    await seedCatalogo(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});