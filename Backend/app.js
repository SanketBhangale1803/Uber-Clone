const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

app.get('/', function(req,res){
res.send('hello world');
});

module.exports = app;