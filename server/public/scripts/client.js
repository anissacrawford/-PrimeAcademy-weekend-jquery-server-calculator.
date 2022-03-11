$(document).ready(handleReady);

function handleReady(){
    // console.log('hi')
    getCalculation();
    $('#addBtn').on('click', handleAdd)
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
        // render(response);
    }).catch(function(error){
        console.log(error);
        alert('error in get!')
    })
}

//function for add 
function handleAdd(){
    let sum = calculation.numberOne + calculation.numberTwo;
    return sum;
}

//function for minus

//function for multiply 

//function for division 