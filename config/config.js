const express = require('express');
const morgan = require('morgan');
// const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
// const sessionsConfig = require('./sessionsConfig');
// const { clearCookie } = require('../middleware/auth');

const config = (app) => {
// USE
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(express.static('public'));
  // app.use(expressSession(sessionsConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // app.use(clearCookie);

  // SET
  app.set('view engine', 'hbs');
};

module.exports = config;
