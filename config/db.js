const { createPool } = require('mysql');

const poll = createPool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_NAME,
    connectionLimit: 10,
    waitForConnections: true
});

module.exports = poll;