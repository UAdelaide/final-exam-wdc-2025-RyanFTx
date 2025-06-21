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
    const [rows] = await pool.query('SELECT Dogs.name, Dogs.size, Users.username AS owner_username FROM Dogs JOIN Users ON Dogs.owner_id = Users.user_id');
    return rows;
}

async function getWalkRequests(){
    const [rows] = await pool.query('SELECT WalkRequests.request_id, Dogs.name, WalkRequests.requested_time, WalkRequests.duration_minutes, WalkRequests.location, Users.name as owner_username FROM WalkRequests JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id JOIN Users ON Dogs.owner_id = Users.users_id');
}

getDogs();
module.exports = pool;