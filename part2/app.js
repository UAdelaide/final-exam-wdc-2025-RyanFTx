const express = require('express');
const path = require('path');
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
    if(!req.session.user)

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Export the app instead of listening here
module.exports = app;