var mysql = require('mysql');
var connection=mysql.createConnection({
     //Options
    host:'47.100.52.38',
    user:'root',
    password:'158342054w',
    database:'blog'
});

connection.connect();

module.exports = connection;