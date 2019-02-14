const express = require('express');
let mongoose = require('mongoose');
const app = express();
const restroutes = require('./routes/restaurant_routes');
const clientroutes = require('./routes/client_routes');
const loginroutes = require('./routes/login_routes');
const bodyparser = require('body-parser');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/restaurante", {useNewUrlParser:true} , function(err,res){
    if(!err){
        console.log('corriendo programa');
    }else{
        console.log('error : ' + err);
    }
});
app.use(bodyparser.json());
app.use(cors());
app.use(clientroutes);
app.use(restroutes);
app.use(loginroutes);

app.listen('3002');

console.log('funcionando');
