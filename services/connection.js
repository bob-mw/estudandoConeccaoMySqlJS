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

const read = () => {
    conn.query("select * from cadastro", (error, results, fields) => {
        if (error) throw error;

        console.log(`Número de linhas encontrado: ${results.length}`);

        results.map((row) => console.log(row));

        conn.end((error) => {
            if (error) throw error;
            console.log("Bye");
        })
    });
};

conn.connect( (error) =>  { 
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
