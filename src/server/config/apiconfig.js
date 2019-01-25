import express from 'express';
import bodyparser from 'body-parser';
import uuid from 'uuid';
import cors from 'cors';
import morgan from 'morgan';
import db from '../models';
const app = express();

//http request reponse logging
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    req.headers['authtoken'],
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))


app.disable('x-powered-by');

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200
}
app.use(cors(corsOptions))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

db.sequelize.authenticate().then(() => {
  console.log('MYSQL Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// db.sequelize.sync().then(result=>console.log('synced')).catch(err=>console.log('error while synciing'))


app.use((req, res, next) => {
  res.set('X-My-Access-Token', uuid.v1());
  next();
})

module.exports = app;
