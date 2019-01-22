import express from 'express';
import bodyparser from 'body-parser';
import uuid from 'uuid';
import cors from 'cors';

const app = express();

app.disable('x-powered-by');

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}
app.use(cors(corsOptions))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());


app.use((req,res,next)=>{
    res.set('X-My-Access-Token',uuid.v1());
    next();
})

module.exports = app;
