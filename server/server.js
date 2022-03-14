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

//store in array 
let calculation = [
    //dummy data
    //{
        // firstNumber: 1,
        // operator: '+',
        // secondNumber: 2
    //}
];

//get route 
app.get('/calculator', (req, res) => {
    console.log('GET /calculator');
    res.send(calculation)
})

//post route 
app.post('/calculator', (req,res) =>{
    let firstNumber = req.body.firstNumber;
    let secondNumber = req.body.secondNumber;
    let operator = req.body.operator;
    let result = 0;

    switch (operator){
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
        case '-':
            result = Number(firstNumber) - Number(secondNumber);
            break;
        case '*':
            result = Number(firstNumber) * Number(secondNumber);
            break;
        case '/':
            result = Number(firstNumber) / Number(secondNumber);
            break;
    }
    let calculationObject = {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        operator: operator,
        result: result,
    }

    calculation.push(calculationObject);
    res.send(calculationObject);

})

//listen
app.listen(PORT, function(){
console.log('listening on port', PORT);
});