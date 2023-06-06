const dotenv = require('dotenv');

dotenv.config({path: '.env'});

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// Debug Nonsense, CORS incoming!
console.log('this is fun')
console.log(PORT);
console.log(DATABASE_URL);

// Start DB Stuff
mongoose.connect(DATABASE_URL, { useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.on('open', () => console.log('Connected to Database'))

// END DB Stuff

// Middleware Setup
app.use(express.json())

// Routes
const sentenceRouter = require('./routes/sentences')
const wordsRouter = require('./routes/words')

app.use('/words', wordsRouter)
app.use('./sentences', sentenceRouter)

// Server INIT
app.listen(PORT, () => console.log('The server has began...'))