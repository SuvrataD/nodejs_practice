const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});