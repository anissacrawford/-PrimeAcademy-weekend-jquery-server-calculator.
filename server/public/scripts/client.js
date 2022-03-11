$(document).ready(handleReady);

function handleReady(){
    console.log('hi')
    getCalculation();
};

getCalculation(){
    $.ajax({
        url: '/calculation',
        method: 'GET'
    })




}

