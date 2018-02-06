const mysql = require('mysql');

let conMySQL = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Noticias'
    });
};

module.exports = () => {
    return conMySQL;
};