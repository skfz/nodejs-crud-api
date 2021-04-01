const mysql = require('mysql');
const config = require('./config');

const connecton = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_database
});

connecton.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});