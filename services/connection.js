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

conn.connect( (err) =>  { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
    }
});
