$(document).ready(handleReady);

function handleReady(){
    // console.log('hi')
    getCalculation();
    $('#addBtn').on('click', handleAdd);
    $('#minusBtn').on('click', handleSubtract);
    $('#multiplyBtn').on('click', handleMultiply);
    $('#divideBtn').on('click', handleDivide);
    $('#equalBtn').on('click', handleEqual);
    $('#clearBtn').on('click', handleClear)
};

let calculation = {
    numberOne: $('numberOne').val(),
    numberTwo: $('numberTwo').val(),
    symbol: ''
}

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

//sum global variable
let sum = 0

//function for addition
function handleAdd(){
    sum = calculation.numberOne + calculation.numberTwo;
    console.log('handleAdd');
}

//function for subtraction
function handleSubtract(){
    sum = calculation.numberOne - calculation.numberTwo;
    console.log('handleSubtract');
}

//function for multiplication 
function handleMultiply(){
    sum = calculation.numberOne * calculation.numberTwo;
    console.log('handleMultiply');
}


//function for division 
function handleDivide(){
    sum = calculation.numberOne / calculation.numberTwo;
    console.log('handleDivide');

}

//function for equal
function handleEqual(){
    console.log('clicked!');
    return sum;
}

function handleClear(){
    $('numberOne').val('');
    $('numberTwo').val('');
}

//handles DOM 
function render(calculation){
    for (const answers of calculation){
        $('body').append(`<h3>
        ${answers.numOne} ${answers.symbol} ${answers.numTwo}
        </h3>`)
    }
}