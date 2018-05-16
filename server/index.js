// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB setup

//mongoose.connect('mongodb://127.0.0.1:auth/auth');


mongoose.connect('mongodb://localhost/auth');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// App setup

app.use(morgan('combined')); // logging fremework
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);
// Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);


