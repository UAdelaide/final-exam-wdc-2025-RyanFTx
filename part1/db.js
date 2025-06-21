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
    const [rows] = await pool.query('SELECT WalkRequests.request_id, Dogs.name, WalkRequests.requested_time, WalkRequests.duration_minutes, WalkRequests.location, Users.username as owner_username FROM WalkRequests JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id JOIN Users ON Dogs.owner_id = Users.user_id WHERE WalkRequests.status = open);
    return rows;
}

async function getWalkerSummary(){
    const [walker_username] = await pool.query('SELECT Users.username AS walker_username FROM Users WHERE role = "walker"');
    const [total_ratings] = await pool.query('SELECT COUNT(*) AS total_ratings FROM WalkRatings WHERE walker_id = ?', [walker_username]);
    const [average_rating] = await pool.query('SELECT AVG(rating) AS average_rating FROM WalkRatings WHERE walker_id = ?', [walker_username]);
    const [completed_walks] = await pool.query('SELECT COUNT(*) AS completed_walks FROM WalkApplications WHERE walker_id = ? AND status = "accepted"', [walker_username.walker_username]);
    const walkers =[];
    walkers.push({
        walker_username: walker_username[0].walker_username,
        total_ratings: total_ratings[0].total_ratings,
        average_rating: average_rating[0].average_rating,
        completed_walks: completed_walks[0].completed_walks
    });
    return walkers; //unfortunately only works for one walker as theres only currently one walker, will complete functionality if i have spare time
}

// getWalkerSummary();
// getDogs();
// getWalkRequests();
module.exports = { pool , getDogs, getWalkRequests, getWalkerSummary};