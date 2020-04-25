import { Client } from 'ts-postgres';
import { DataType } from 'ts-postgres';

const connectSettings = 
{
    host     : "localhost",
	port     : 5432,
	user     : "docker",
	password : "XdccDa85_JK",
	dbname   : "docker"
}

async function main() {
    const client = new Client(connectSettings);

    var sqlCreate = `CREATE TABLE currencies(id SERIAL PRIMARY KEY, name VARCHAR(3))`;
    var sqlInsert = `INSERT INTO currencies (name) VALUES ($1)`; 
    var sqlQuery = `SELECT id, name FROM currencies LIMIT $1`;

    await client.connect();
    try {
        await client.query(sqlCreate); 
        await client.query(sqlInsert, ['EUR']);
        await client.query(sqlInsert, ['USD']);
        await client.query(sqlInsert, ['CHF']);

        const resultIterator = client.query(sqlQuery, [10], [DataType.Int4]); 

        for await (const row of resultIterator) {
            console.log((row?.get('id')?.toString() ?? "NA") + " :: " + row?.get('name')?.toString());
        }
    } finally
    {
        await client.end();
    }
}

main()