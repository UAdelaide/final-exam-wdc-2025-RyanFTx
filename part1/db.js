const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'DogWalkService',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function getDogs(){
    const [rows]
}

module.exports(pool);