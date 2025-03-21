//spread operator

let numberset = [1,2,3,4,5];

maxNumber = Math.max(...numberset);
console.log(maxNumber);

//combining two arrays
let fruits = ["apples", "mango", "oranges"];
let vegetables = ["kales", "spinach", "cabbage"];

let food = [...fruits, ...vegetables, "milk", "eggs"];

console.log(...food);  // Prints each element separately
console.log(food);      // Prints the full array

//rest parameter
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const averageNum = getAverage(1,2,3,4,5);
console.log(averageNum);