var mysql = require('mysql');
var connection=mysql.createConnection({
     //Options
    host:'127.0.0.1',
    user:'root',
    password:'158342054w',
    database:'blog'
});

connection.connect();

module.exports = connection;