const mysql = require('mysql');

const config = {
    host: "localhost",
    user: "firstUser",
    password: "firstUser",
    database: "conectionJS",
    port: 3306,
    ssl: false
  };

const conn = mysql.createConnection(config);

const create = () => {
    conn.query(`INSERT INTO cadastro (nome, idade) VALUES (?, ?);`, ["pernelongo", 132], (error, results, fields) => {
        if (error) throw error;
        console.log(`Linhas inseridas na tabela: ${results.affectedRows}`)
        
        conn.end((error) => {
            if (error) throw error;
            console.log("Bye");
        });
    });
};

const read = () => {
    conn.query("SELECT * FROM cadastro", (error, results, fields) => {
        if (error) throw error;

        console.log(`Número de linhas encontrado: ${results.length}`);

        results.map((row) => console.log(row));

        conn.end((error) => {
            if (error) throw error;
            console.log("Bye");
        })
    });
};

const update = (id) => {
    conn.query(`UPDATE cadastro  SET nome = ?, idade = ? WHERE id = ${id}`, ["mapinha", 41], (error, results, fields) => {
        if (error) throw error;
        console.log(`Foram atulalizadas: ${results.affectedRows}`)

        conn.end((error) => {
            if (error) throw error;
            console.log("Bye");
        })
    });
};

conn.connect((error) =>  { 
    if (error) { 
        console.log("Foi encontrado algum problema:");
        throw error;
    }
    else
    {
       console.log("Conecção feita com sucesso");
       read();
    }
});
