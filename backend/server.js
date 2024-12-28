const express = require('express');
const axios = require('axios'); 
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // Importing connectDB from db.js
const stockRoutes = require('./routes/stockRoutes');

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

// separating out the stock-related API calls
app.use('/api', stockRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});