import createError, {HttpError} from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import  mongoose  from 'mongoose';
import { isLoggedIn } from '../middleware/auth';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import flash from 'connect-flash';
import * as DbConfig from './db'


const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: (DbConfig.RemoteURI) ? DbConfig.RemoteURI : DbConfig.LocalURI
  }),
  secret: DbConfig.Secret,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 600000
  }
}

import contactRouter from '../routes/contact';
import indexRouter from '../routes/index';
import userRouter from '../routes/user';
//instantiate mongo


mongoose.connect((DbConfig.RemoteURI) ? DbConfig.RemoteURI:DbConfig.LocalURI);

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('connected to MongoDB at: ' + DbConfig.HostName)
})

var app = express();



// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));


//setup flash

app.use(flash());

//express session

app.use(session(StoreOptions));

//passport

app.use(passport.initialize());
app.use(passport.session());

//router middleware

app.use('/', indexRouter);
app.use('/contact', isLoggedIn, contactRouter);
app.use('/auth', userRouter );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app;