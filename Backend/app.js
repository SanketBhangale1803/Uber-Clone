const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

connectToDb();

const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req,res){
res.send('hello world');
});

app.use('/users', userRoutes); 

module.exports = app;
