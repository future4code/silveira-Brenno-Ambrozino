import { connection } from "./connection";

const printError = (error:any) => { console.log(error.sqlMessage || error.message)}

const createTable = () => connection
    .raw(`
    CREATE TABLE aula49_exercicio(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        type VARCHAR(255) NOT NULL
    );
    `)
    .then(() => { console.log("Tabela criada")})
    .catch(printError)

createTable()
