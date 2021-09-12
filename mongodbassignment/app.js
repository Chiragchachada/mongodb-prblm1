const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
// Step 1 Import Moongose

const mongoose = require("mongoose");

// Step 2 connection to database
mongoose.connect (process.env.DB_HOST_CONNECTION_URL,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
}, function(err){
    if (err) {
        console.log(`error occured`,err );
    } else {
        console.log("Connected Successfully")
    }
});




const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentDetailsRouter = require('./routes/studentDetails');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/studentDetails', studentDetailsRouter);

module.exports = app;
