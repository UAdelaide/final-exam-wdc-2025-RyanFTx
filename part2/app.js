const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();

// Middleware

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
  }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

function authentication(req, res, next) {
    if(!req.session.user) {
        return res.redirect('/');
    }
    next();
}
// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

app.get('/owner-dashboard', authentication, (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'owner-dashboard.html'));
});

app.get('/walker-dashboard.html', authentication, (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'walker-dashboard.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
// Export the app instead of listening here
module.exports = app;