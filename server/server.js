//requiring express 
const express = require('express');
const res = require('express/lib/response');

//bodyParser
const bodyParser = require('body-parser');

//make a server
const app = express();
const PORT = 5000;

//serve static files 
app.use(express.static('server/public'));

//use bodyParser config!
app.use(bodyParser.urlencoded({extended:true}));

//dummy data
let calculation = [
    {
        numOne: 1,
        symbol: 'Add',
        numTwo: 1,
    }
];

app.get('/calculator', (req, res) => {
    console.log('GET /calculator');
    res.send(calculation)
})

app.post('/calculator', (req,res) =>{
    console.log('POST quotes', req.body);
    calculation.push(req.body);
    res.sendStatus(201);
})


//listen
app.listen(PORT, function(){
console.log('listening on port', PORT);
});