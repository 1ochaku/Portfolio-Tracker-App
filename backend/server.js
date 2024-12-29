const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
const PORT = 5000;

// connecting to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// all of the api calls directed here
app.use('/api', stockRoutes);

// Serve React's static files
const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));

// Catch-All: React Router routes
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

// console log when server started
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});