const express = require('express');
const cors = require('cors');
const db = require('./db/db'); // Import the db function
const app = express();
const {readdirSync} = require('fs');

require('dotenv').config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = () => {
    db(); // Call the db function to connect to the database
    app.listen(PORT, () => {
        console.log('Server is running on port', PORT);
    });
};

server();