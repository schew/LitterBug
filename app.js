var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home')

var app = express();

// configure mongoose
mongoose.connect('mongodb://localhost:27017');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use('/', routes);
app.use('/users', users);
app.get('/home', home)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// TODO: MONGOOSE STUFF -- FOR GETTING STUFF FROM DB -- FOCUS ON LATER
// var tempData = mongoose.model('TempTrash', {
//   resident0: [59, 38, 29, 10, 30, 38, 27, 23, 23, 24, 22, 23],
//   resident1: [38, 29, 18, 29, 29, 18, 29, 50, 28, 38, 28, 26],
//   district0: [50, 51, 25, 30, 35, 27, 26, 25, 25, 27, 29, 25],
//   baltimore: [59, 48, 30, 38, 25, 26, 28, 27, 26, 25, 30, 24],
//   baltimoreCounty: [60, 49, 39, 29, 29 , 26, 24, 26, 27, 27, 29, 26]
// });

// get info from mongoose
// app.get('/api/tempdata', function(req, res) {

//     // use mongoose to get all todos in the database
//     TempTrash.find(function(err, trash) {

//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err)
//             res.send(err)

//         res.json(trash); // return all todos in JSON format
//     });
// });
//
//var Schema = mongoose.Schema;
//
//var MonthlyData = new Schema({
//    userid: String,
//    weightData: []
//});
//
//// the schema is useless so far
//// we need to create a model using it
//var MonthlyData = mongoose.model('MonthlyData', MonthlyData);

// make this available to our users in our Node applications
//module.exports = MonthlyData;

module.exports = app;
