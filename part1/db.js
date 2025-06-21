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
    const [rows] = await pool.query('SELECT WalkRequests.request_id, Dogs.name, WalkRequests.requested_time, WalkRequests.duration_minutes, WalkRequests.location, Users.username as owner_username FROM WalkRequests JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id JOIN Users ON Dogs.owner_id = Users.user_id');
    return rows;
}

async function getWalkerSummary(){
    const walker_username = await pool.query('SELECT Users.username AS walker_username FROM Users WHERE role = "walker"');
    const [total_ratings] = await pool.query('SELECT COUNT(*) AS total_ratings FROM WalkRatings WHERE walker_id = ?', [walker_username]);
    const [average_rating] = await pool.query('SELECT AVG(rating) AS average_rating FROM WalkRatings WHERE walker_id = ?', [walker_username]);
    const [completed_walks] = await pool.query('SELECT COUNT(*) AS completed_walks FROM WalkApplications WHERE walker_id = ? AND status = "accepted"', [walker_username]);
    console.log(walker_username, total_ratings, average_rating, completed_walks);
}

getWalkerSummary();
// getDogs();
// getWalkRequests();
module.exports = pool;