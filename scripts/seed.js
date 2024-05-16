const { db } = require('@vercel/postgres');
const {
    cuadros,
} = require('../app/lib/placeholder-data.js');
const cronology = require('../app/lib/cronology.json');
const bcrypt = require('bcrypt');



async function seedCatalogo(client ) {
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
                (cuadro) => client.sql`
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

async function seedCronology(client) {
    try {
        // check if the table exists and remove it if it does

        const existingTable = await client.query(`
            SELECT to_regclass('cronology');
        `);

        if (existingTable.rows[0].to_regclass) {
            console.log('Dropping "cronology" table');
            await client.query(`
                DROP TABLE cronology;
            `);
        }

        // the table has year and events as array of strings
        const createTable = await client.sql`
            CREATE TABLE cronology (
                id SERIAL PRIMARY KEY,
                year INTEGER NOT NULL,
                events TEXT[]
            );
        `;



        console.log(`Created "cronology" table`);

        const insertedCronology = await Promise.all(
            Object.entries(cronology).map(
                ([year, events]) => client.sql`
            INSERT INTO cronology (year, events)
                VALUES (${parseInt(year)}, ${events})
                ON CONFLICT DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedCronology.length} events`);

        return {
            createTable,
            cronology: insertedCronology,
        };
    } catch (error) {
        console.error('Error seeding cronology:', error);
        throw error;
    }
}

async function main() {
    const client
     = await db.connect();

    await seedCatalogo(client);
    await seedCronology(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});