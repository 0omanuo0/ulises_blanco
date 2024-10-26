const { db } = require('@vercel/postgres');
const { cuadros, expos } = require('./placeholder-data.js');
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
                imgPath VARCHAR(255),
                expos TEXT[]
            );
            `;


        console.log(`Created "catalogo" table`);

        let insertedCuadros = await Promise.all(
            cuadros.map((cuadro) =>
                client.query(
                    `INSERT INTO catalogo (titulo, coleccion, año, dimensiones, descripcion, material, imgPath, expos)
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                     ON CONFLICT DO NOTHING;`,
                    [
                        cuadro.titulo,
                        cuadro.coleccion,
                        cuadro.año,
                        cuadro.dimensiones,
                        cuadro.descripcion,
                        cuadro.material,
                        cuadro.imgPath,
                        cuadro.expos,
                    ]
                )
            )
        );

        for (let i = cuadros.length; i < 54; i++) {
            insertedCuadros.push(
                client.query(
                    `INSERT INTO catalogo (titulo, coleccion, año, dimensiones, descripcion, material, imgPath, expos)
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                     ON CONFLICT DO NOTHING;`,
                    ['', '', 0, '100x100', '', '', `https://storage.manu365.dev/art/cuadro-${i + 1}.webp`, []]
                )
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


async function seedExpos(client) {
    try {
        // check if the table exists and remove it if it does

        const existingTable = await client.query(`
            SELECT to_regclass('expos');
        `);

        if (existingTable.rows[0].to_regclass) {
            console.log('Dropping "expos" table');
            await client.query(`
                DROP TABLE expos;
            `);
        }

        // console.log("creating expos table");

        const createTable = await client.sql`
            CREATE TABLE expos (
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                fecha VARCHAR(255),
                lugar VARCHAR(255),
                descripcion TEXT
            );
            `;
        console.log(`Created "expos" table`);

        const insertedExpos = await Promise.all(
            expos.map(
                (expo) => client.query(
                    `INSERT INTO expos (titulo, fecha, lugar, descripcion)
                     VALUES ($1, $2, $3, $4)
                     ON CONFLICT DO NOTHING;`,
                    [
                        expo.titulo,
                        expo.fecha,
                        expo.lugar,
                        expo.descripcion,
                    ],
                )
            )
        );

        console.log(`Seeded ${insertedExpos.length} expos`);
        

        return {
            createTable,
            expos: insertedExpos,
        };

    }
    catch (error) {
        console.error('Error seeding expos:', error);
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
    await seedExpos(client);
    await seedCronology(client);


    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});