//requiring express 
const express = require('express');

//bodyParser
const bodyParser = require('body-parser');

//make a server
const app = express();
const PORT = 5000;

//serve static files 
app.use(express.static('server/public'))

//use bodyParser config!
app.use(bodyParser.urlencoded({extended:true}));

//listen
app.listen(PORT, function(){
console.log('listening on port', PORT);
});