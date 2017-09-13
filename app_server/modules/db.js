var mongoose = require('mongoose');
var gracefulShutdown; 
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./app_server/models/db');
var url = 'mongodb://localhost:27017/myproject'; 

//Opretter Connection
mongoose.connect(url);

//Monitor connection
mongoose.connection.on('connected', function (){
    console.log('Mongoose connected to' + url);
});
mongoose.connection.on('error', function () {
    console.log('Mongoose connected error' + url);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

//For Heroku app termination
// Der skal oprettes en forbindelse til den.

require('./addfitness');

//gracefulShutdown = function (msg, callback) {
//    mongoose.connection.close(function () {
//        console.log('Mongoose disconnected through ' + msg);
//        callback();
//    });
//};

//process.once('SIGUSR2', function () {
//    gracefulShutdown('nodemon restart', function () {
//        process.kill(process.pid, 'SIGUSR2');
//    });
//});
//process.on('SIGINT', function () {
//    gracefulShutdown('app termination', function () {
//        process.exit(0);
//    });
//});
//process.on('SIGTERM', function () {
//    gracefulShutdown('Heroku app shutdown', function () {
//        process.exit(0);
//    });
//});