// Import mysql
let mysql = require('mysql');

// Connection with mysql db
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'rest_api'
});
connection.connect(function(err) {
    if (err) throw err;
});

module.exports=connection;