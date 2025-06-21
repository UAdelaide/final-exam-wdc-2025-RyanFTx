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
    const [rows] = await pool.query('SELECT Dogs.name, Dogs.size, Users.username AS owner_name FROM Dogs JOIN Users ON Dogs.owner_id = Users.user_id');
}

getDogs();
module.exports = pool;