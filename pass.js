var Password = require("node-php-password");
var hash = Password.hash("password123");
var h = "$2y$10$KLoqmE3s3Z5Tva4cU3SunOaWGGvNvgdRNBDwk/oD/qPzyYDtZZtDW";
console.log(hash);
console.log(Password.verify("password123", hash));


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '45.76.236.44',
    user     : 'root',
    password : 'S4msungas0458.',
    database : 'openvpn-admin',
    ssl  : {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false
    }
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();