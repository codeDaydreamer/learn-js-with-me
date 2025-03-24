//a callback is a function that is passed as an argument to another function
//used to handle asynchronous operations

function sum (callback, x , y){
    let result = x + y ;
    callback(result);
}

function displayResult(result){
    console.log(result);
}

sum(displayResult, 4, 5);