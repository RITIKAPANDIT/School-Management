// const mysql=require('mysql2/promise')
// const db=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'ritika',
//     database:'student_db'
// })


//      module.exports=db


const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

module.exports = db;

// const mysql = require('mysql2/promise');
// require('dotenv').config();
// const url = require('url');

// const dbUrl = process.env.DATABASE_URL;
// console.log('Database URL:', dbUrl);  // Check if it's properly loaded

// if (!dbUrl) {
//     throw new Error('DATABASE_URL is not defined in .env file');
// }

// const parsedUrl = url.parse(dbUrl);
// const [username, password] = parsedUrl.auth.split(':');

// const db = mysql.createPool({
//     host: parsedUrl.hostname,
//     user: username || '',
//     password: password || '',
//     database: parsedUrl.pathname.split('/')[1],
//     port: parsedUrl.port || 3306,
// });

// module.exports = db;

