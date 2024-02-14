const mysql = require("mysql");
const { DB_HOST, DB_PORT, DB_DBNAME, DB_USERNAME, DB_PASSWORD, MYSQL_TIMEZONE } = process.env


var pool  = mysql.createPool({
    host     : DB_HOST,
    port     :DB_PORT,
    user     : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_DBNAME,
    connector: 'mysql',
    timezone: MYSQL_TIMEZONE,
    charset : 'utf8mb4'
});

module.exports = pool;