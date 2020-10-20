// const { query } = require("express")

// // importar dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// // criar objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// // utilizar o banco
//   db.serialize(() => {
//     //criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
   
//     // Inserir dados na tabela
//     // template literals
//     const query = `
//         INSERT INTO places(
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
// `
//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
//         "Papersider",
//         "avenida Mateo Bei, São matheus",
//         "Número 260",
//         "São Paulo",
//         "São Paulo",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }
//     //db.run(query, values, afterInsertData )




//     //Consultar dados da tabela
//     db.all("SELECT * FROM places", function(err, rows){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Registros")
//         console.log(rows)
//     })



//     // deletar um dado da tabela
//     // db.run("DELETE FROM places WHERE id = ?", [1], function(err) {
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso!")
//     // })

// })