const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { dbConnection } = require('./database/config');

const { PORT } = process.env 

// Create the express server
const app = express();

// Database
dbConnection();

// CORS
app.use( cors())

// Public directory
app.use( express.static('public'));

// Reading and parsing the body
app.use( express.json() );

// Routes
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Events

// listen request
app.listen( PORT, () => {
    console.log(`Server running on the port ${ PORT } og å lykkes`)
})