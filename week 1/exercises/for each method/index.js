//The forEach method in JavaScript is used to iterate over an array and execute a provided function once for each element. It is a simpler way to loop through an array compared to a traditional for loop.
// the element, index, array are profided by the function automaticaly

let numbers = [1,2,3,4,5];

function display (element){
    console.log(element);
}

function double (element, index, array){
    array[index] = element * 2;
}

//numbers.forEach(double);
//numbers.forEach(display);

let fruits = [`apple`,`oranges`,`bananas`,`mango`];



fruits.forEach(capitalize);
fruits.forEach(displayFruit);

function displayFruit(element){
    console.log(element);
}

function upperCase (element,index, array){
    array[index]= element.toUpperCase();
}

function capitalize (element , index , array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

