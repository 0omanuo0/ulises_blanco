const { db } = require('@vercel/postgres');
const { cuadros } = require('./placeholder-data.js');
const cronology = require('./cronology.json');
const bcrypt = require('bcrypt');



async function seedCatalogo(client) {
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
        let insertedCuadros = await Promise.all(
            cuadros.map(
                (cuadro) => client.sql`
            INSERT INTO catalogo (titulo, coleccion, año, dimensiones, descripcion, material, imgPath)
                VALUES (${cuadro.titulo}, ${cuadro.coleccion}, ${cuadro.año}, ${cuadro.dimensiones}, ${cuadro.descripcion}, ${cuadro.material}, ${cuadro.imgPath})
                ON CONFLICT DO NOTHING;
            `,
            ),
        );

        // seed the next 54-cuadros as default titulo: "", coleccion: "", año: NaN, dimensiones: "100x100", descripcion: "", material: "", imgpath: `https://storage.manu365.dev/art/cuadro-${i + 1}.webp`

        for (let i = cuadros.length; i < 54; i++) {
            insertedCuadros.push(
                client.sql`
            INSERT INTO catalogo (titulo, coleccion, año, dimensiones, descripcion, material, imgPath)
                VALUES ('', '', 0, '100x100', '', '', ${`https://storage.manu365.dev/art/cuadro-${i + 1}.webp`})
                ON CONFLICT DO NOTHING;
            `,
            );
        }

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
    const client = await db.connect();

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