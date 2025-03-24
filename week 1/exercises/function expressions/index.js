//A function expression is when a function is assigned to a variable. 
// Unlike function declarations, function expressions are not hoisted, 
// meaning they cannot be called before they are defined.

const numbers = [1,2,3,4,5,6];

const evenNums = numbers.filter(function(element){
    return element % 2 === 0 ;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0 ;
});

const sumNums = numbers.reduce(function(prev, next){
    return prev + next ;
});

const sayHello = function(){
    console.log(`hello there`);
}

sayHello();
console.log(sumNums);

//arrow functons
// Arrow functions (=>) are a shorter syntax for writing function expressions in JavaScript.
// They are commonly used for concise function definitions, especially in callbacks and array methods.
// the formula is (arguments) => {some code}

const sayArrowHello = (name , age) => {console.log(`Hello ${name} from arrow function !`);
                                 console.log(`you are ${age} years old`)
};

const evenArrowNums = numbers.filter((element) => {
    return element % 2 === 0 ;
});

const maxNum = numbers.reduce((max, current) => Math.max(max, current), numbers[0]);
console.log(maxNum);
console.log(evenArrowNums);
sayArrowHello(`kev`, 21);


