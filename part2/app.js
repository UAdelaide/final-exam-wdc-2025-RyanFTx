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
    cookie: { secure: false }
}));
app.use(express.json());

function authentication(role) {
    return (req, res, next) => {
        if(!req.session.user) {
            return res.redirect('/');
        }
        if(req.session.user.role !== role) {
            return res.status(403).send('You are not allowed to access this page');
        }
    next();
    };
}


// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

app.get('/owner-dashboard.html', authentication, (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'owner-dashboard.html'));
});

app.get('/walker-dashboard.html', authentication, (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'walker-dashboard.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
// Export the app instead of listening here
module.exports = app;