import mysql from "mysql"

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'football'
});

connection.connect();