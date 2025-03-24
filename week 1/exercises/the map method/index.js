// The .map method in JavaScript is used to iterate over an array and create a new array with the results of applying a given function to each element.
//     .map returns a new array with transformed values.

//     .forEach does not return anything (it just runs a function for each element).

//      Use .map when you want to create a new array with modified data.



const numbers = [1, 2, 3, 4, 5];
const students = [`spongebob` , `squidward` ,`patrick`]


const squares = numbers.map(square);
const studentsUpper = students.map(upperCase);

console.log(squares);
console.log(studentsUpper);

function square(element){
    return Math.pow(element, 2);
}

function upperCase(element){
    return element.toUpperCase();
}

//formatting dates 

const dates = [`2025-4-10` , `2025-5-10`, `2025-11-30`];

const newDates = dates.map(formatDate);

console.log(newDates);

function formatDate(element){
    const parts = element.split(`-`);
    console.log(parts);
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// .filter method
// creates a new array by filtering out elelements

const evenNums = numbers.filter(isEven);
const oddNums = numbers.filter(isOdd);

console.log(`even numbers : ${evenNums}`);
console.log(`odd numbers : ${oddNums}`);

function isEven (element){
    return element % 2 === 0;
}

function isOdd (element){
    return element % 2 !== 0;
}

// .reduce method reduces elements in an aray to a single value

const prices = [10, 20, 30, 40 ,50];
const grades = [70, 40, 50, 90, 30];


const total = prices.reduce(sum);
const avgGrade = grades.reduce(sum) / grades.length;
const maxGrade = grades.reduce(getMax);


console.log(`total prices KES : ${total}`);
console.log(`AVG Grade is : ${avgGrade}`);
console.log(`Max Grade is : ${maxGrade}`);
avgGrade  >= 50 ? console.log(`Above average!`) : console.log(`Below average!` )


function sum (accumulator, element){
    return accumulator + element;
}

function getMax (accumulator, element){
    return Math.max(accumulator , element);
}