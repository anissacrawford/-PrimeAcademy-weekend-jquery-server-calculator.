// const res = require("express/lib/response");

$(document).ready(handleReady);

//global variable for operator 
let operator = ''

//handleReady function 
function handleReady(){
    // console.log('hi')
    getCalculation();
   
    
    $('#equalBtn').on('click', handleEqual);
    $('#clearBtn').on('click', handleClear)
};


function getCalculation (){

    $.ajax({
        url: '/calculator',
        method: 'GET'
    }).then(function(response){
        console.log(response);
        render(response);
    }).catch(function(error){
        console.log(error);
        alert('error in get!')
    })
}

function calculate(){
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();
    let calculationObject = {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        operator: operator,
    }

    $.ajax({
        url: '/calculator',
        method: 'POST',
        data: calculationObject,
    }).then(function(res){
        // let result = response.result
        // $('#result').append(`${result}`) 
        
        //send response 
        let result = response.result;
        $('#result').append(`${result}`)
        getCalculation();
    })
}

//function for equal
function handleEqual(){
    console.log('clicked!');
}

//handle clear button 
function handleClear(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');

    $('#result').empty();
}

//handles DOM 
function render(calculation){
    for (const answers of calculation){
        $('#history').append(`<h3>
        ${answers.firstNumber} ${answers.operator} ${answers.secondNumber} = ${answers.results}
        </h3>`)
    }
}