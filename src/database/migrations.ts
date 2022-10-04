// import connection from "./connection"
// import { 
//     TABELA_DOCENTE, 
//     TABELA_DOCENTE_ESPECIALIDADE, 
//     TABELA_ESPECIALIDADE, 
//     TABELA_ESTUDANTE, 
//     TABELA_ESTUDANTE_HOBBY, 
//     TABELA_HOBBY, 
//     TABELA_TURMA 
// } from "./tableNames"

// const createTables = async () => {
//     await connection.raw(`
// DROP TABLE IF EXISTS ${TABELA_TURMA}, ${TABELA_ESTUDANTE}, ${TABELA_DOCENTE};

// CREATE TABLE IF NOT EXISTS ${TABELA_TURMA}(
//     id VARCHAR(255) PRIMARY KEY,
//     nome VARCHAR(255) NOT NULL,
//     modulo VARCHAR(255) DEFAULT 0
// );

// CREATE TABLE IF NOT EXISTS ${TABELA_ESTUDANTE}(
//     id VARCHAR(255) PRIMARY KEY,
//     nome VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     data_nasc DATE NOT NULL,
//     turma_id VARCHAR(255) NOT NULL,
//     FOREIGN KEY (turma_id) REFERENCES ${TABELA_TURMA}(id)
// );

// CREATE TABLE IF NOT EXISTS ${TABELA_DOCENTE}(
//     id VARCHAR(255) PRIMARY KEY,
//     nome VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     data_nasc DATE NOT NULL,
//     turma_id VARCHAR(255) NOT NULL,
//     FOREIGN KEY (turma_id) REFERENCES ${TABELA_TURMA}(id)
// );

// CREATE TABLE IF NOT EXISTS ${TABELA_HOBBY}(
//     id VARCHAR(255) PRIMARY KEY,
//     nome VARCHAR(255) NOT NULL UNIQUE
// );

// CREATE TABLE IF NOT EXISTS ${TABELA_ESPECIALIDADE}(
//     id VARCHAR(255) PRIMARY KEY,
//     nome VARCHAR(255) NOT NULL UNIQUE
// );

// CREATE TABLE IF NOT EXISTS ${TABELA_ESTUDANTE_HOBBY}(
//     id VARCHAR(255) PRIMARY KEY,
//     estudante_id VARCHAR(255) NOT NULL,
//     hobby_id VARCHAR(255) NOT NULL,
//     FOREIGN KEY (estudante_id) REFERENCES ${TABELA_ESTUDANTE}(id),
//     FOREIGN KEY (hobby_id) REFERENCES ${TABELA_HOBBY}(id)
// );

// CREATE TABLE IF NOT EXISTS ${TABELA_DOCENTE_ESPECIALIDADE}(
//     id VARCHAR(255) PRIMARY KEY,
//     docente_id VARCHAR(255) NOT NULL,
//     especialidade_id VARCHAR(255) NOT NULL,
//     FOREIGN KEY (docente_id) REFERENCES ${TABELA_DOCENTE}(id),
//     FOREIGN KEY (especialidade_id) REFERENCES ${TABELA_ESPECIALIDADE}(id)
// );

//     `)
//         .then(() => {
//             console.log(`Tables created successfully!`)
//             // insertData()
//         })
//         .catch((error: any) => printError(error))
// }

// const insertData = async () => {
//     try {
//         await connection(TABLE_USERS)
//             .insert(users)
//             .then(() => console.log(`${TABLE_USERS} populated!`))
//             .catch((error: any) => printError(error))

//         await connection(TABLE_PRODUCTS)
//             .insert(products)
//             .then(() => console.log(`${TABLE_PRODUCTS} populated!`))
//             .catch((error: any) => printError(error))

//         await connection(TABLE_PURCHASES)
//             .insert(purchases)
//             .then(() => console.log(`${TABLE_PURCHASES} populated!`))
//             .catch((error: any) => printError(error))

//     } catch (error: any) {
//         console.log(error.sqlMessage || error.message)
//     } finally {
//         console.log("Ending connection!")

//         return connection.destroy()
//     }
// }

// const printError = (error: any) => {
//     console.log(error.sqlMessage || error.message)
// }

// createTables()