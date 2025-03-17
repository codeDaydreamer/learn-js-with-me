let x;
x = 100;

let y = 200;
let age = 20;
let firstName = `John`;
let status = true;


console.log(y);
console.log(x); 
console.log(age);


console.log(`you are ${age} years old`); // you are 20 years old
console.log(typeof age); // number
console.log(typeof firstName); // string
console.log(`your name is ${firstName}`); // your name is John
console.log(status); // true 


//displaying on the page

let fullName = `John Doe`;
let myAge = 25;
let student = true;

document.getElementById(`p1`).textContent = `My name is ${fullName}`;
document.getElementById(`p2`).textContent = `I am ${myAge} years old`;
document.getElementById(`p3`).textContent = `I am a student: ${student}`;