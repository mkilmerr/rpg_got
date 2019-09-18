const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const config = require("../config/config");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));


app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.use( expressSession({
	secret :config.secretSession,
	resave : config.resaveSession,
	saveUninitialized : config.saveUninitialized
}));
const url =config.url;
const options = {
    reconnectTries : Number.MAX_VALUE,
    reconnectInterval : 500,
    poolSize : 5,
    useNewUrlParser : true
};


mongoose.connect(url,options);
mongoose.set('useCreateIndex',true);

mongoose.connection.on("error",err=>{
    console.log("Erro do inferno >>>>>" + err)
});

mongoose.connection.on("disconnected",()=>{
    console.log("disconnected");
});

mongoose.connection.on("connected",()=>{
    console.log("connected!")
})

consign()
	.include('app/routes')
	.then('app/controllers')
	.into(app);

module.exports = app;