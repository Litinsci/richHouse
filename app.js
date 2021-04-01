var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
let isAdmin = require('./isAdmin.js');
const dateFns = require("date-fns");
// const formidableMiddleware = require('express-formidable');

var indexRouter = require('./routes/public/index');
var usersAdmin = require('./routes/private/loginAdmin');
var usersadminPage = require('./routes/private/indexAdmin');
var NewsCrud = require('./routes/private/NewsCRUD');
var SharesCrud = require("./routes/private/sharesCRUD");

var app = express();

app.locals.dateFns = dateFns;



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// app.use(express.session());
app.use(cookieParser());
app.use(session({
  name: "server-session-cookie-id",
  secret: 'rjhjyjdbhecrjhjyjdbhece[jlbcyfitujhfqjyf',
  maxAge: null,
  saveUninitialized: true,
  resave: true,
}));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/admin', usersAdmin);
app.use('/adminPage',isAdmin, usersadminPage);
app.use('/NewsCRUD',isAdmin, NewsCrud);
app.use("/sharesCRUD",isAdmin,SharesCrud);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;