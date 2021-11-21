const { MongoClient } = require('mongodb');

async function main() {
    const url = 'mongodb+srv://RequestAbuilder:d366ujgQyfyX68B@requestabuilder.g0esr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

    // creates connection with mongodb client
    const client = new MongoClient(url);

    try {
        // await for client connection
        await client.connect();
        await listDbs(client);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error());

async function listDbs(client) {
    const dbList = await client.db().admin().listDatabases();

    console.log('Databases: ');
    dbList.databases.forEach(db => {
        console.log(`name: ${db.name}`)
    });
}