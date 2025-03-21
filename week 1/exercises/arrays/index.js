// Array for testing
let numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

// Adding and Removing Elements
numbers.push(6); // Add at the end
console.log("After push:", numbers);
numbers.pop(); // Remove from the end
console.log("After pop:", numbers);
numbers.unshift(0); // Add at the start
console.log("After unshift:", numbers);
numbers.shift(); // Remove from the start
console.log("After shift:", numbers);

// Iteration Methods
numbers.forEach(num => console.log("forEach:", num * 2));

// Transformation Methods
let doubled = numbers.map(num => num * 2);
console.log("map (double each element):", doubled);

// Filtering
let evens = numbers.filter(num => num % 2 === 0);
console.log("filter (even numbers):", evens);

// Reducing
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce (sum of elements):", sum);

// Finding Elements
let found = numbers.find(num => num > 3);
console.log("find (first number > 3):", found);
let index = numbers.findIndex(num => num > 3);
console.log("findIndex (index of first number > 3):", index);

// Checking Conditions
let someGreater = numbers.some(num => num > 4);
console.log("some (is any number > 4?):", someGreater);
let allPositive = numbers.every(num => num > 0);
console.log("every (are all numbers > 0?):", allPositive);

// Searching
console.log("includes (does array have 3?):", numbers.includes(3));
console.log("indexOf (position of 4):", numbers.indexOf(4));

// Slicing and Splicing
let sliced = numbers.slice(1, 3); // Extract part of the array
console.log("slice (index 1 to 3):", sliced);
numbers.splice(2,1,99); // Remove 1 element at index 2 and insert 99
console.log("splice (replace index 2 with 99):", numbers);

// Sorting and Reversing
numbers.sort((a, b) => a - b); // Ascending order
console.log("sort (ascending order):", numbers);
numbers.reverse();
console.log("reverse:", numbers);

// Sorting in Descending Order
numbers.sort((a, b) => b - a);
console.log("sort (descending order):", numbers);





