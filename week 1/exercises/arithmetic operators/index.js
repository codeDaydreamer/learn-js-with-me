// Initialize the variable 'students' with a value of 33
let students = 33;

// Increment students by 1 (33 + 1 = 34)
students = students + 1; 

// Decrement students by 1 (34 - 1 = 33)
students = students - 1; 

// Multiply students by 2 (33 * 2 = 66)
students = students * 2; 

// Divide students by 2 (66 / 2 = 33)
students = students / 2; 

// Get the remainder when students is divided by 2 (33 % 2 = 1)
let extraStudents = students % 2; 

// Raise students to the power of 2 (33 ** 2 = 1089)
students = students ** 2; 

// Output the final values
console.log(students);       // 1089
console.log(extraStudents);  // 1

/*
// Initialize the variable 'students' with a value of 33
let students = 33;

// Long way
students = students + 1; // Increment by 1 (33 + 1 = 34)

// Short way
students += 1; // Same as above (34 + 1 = 35)

// Long way
students = students - 1; // Decrement by 1 (35 - 1 = 34)

// Short way
students -= 1; // Same as above (34 - 1 = 33)

// Long way
students = students * 2; // Multiply by 2 (33 * 2 = 66)

// Short way
students *= 2; // Same as above (66 * 2 = 132)

// Long way
students = students / 2; // Divide by 2 (132 / 2 = 66)

// Short way
students /= 2; // Same as above (66 / 2 = 33)

// Long way
let extraStudents = students % 2; // Get remainder (33 % 2 = 1)

// Short way
let extraStudentsShort = students; // Using the same value as extraStudents

// Long way
students = students ** 2; // Raise to power (33 ** 2 = 1089)

// Short way
students **= 2; // Same as above (1089 ** 2 = A very large number!)

// Output the final values
console.log(students);       // 1089 (or larger if using **= again)
console.log(extraStudents);  // 1
console.log(extraStudentsShort); // 1
*/

// Operator Precedence in JavaScript
let result1 = 10 + 5 * 2; 
console.log("10 + 5 * 2 =", result1); // Multiplication (*) happens first → 10 + (5 * 2) = 20

let result2 = (10 + 5) * 2;
console.log("(10 + 5) * 2 =", result2); // Parentheses () force addition first → (10 + 5) * 2 = 30

let result3 = 100 / 5 * 2;
console.log("100 / 5 * 2 =", result3); // Left-to-right evaluation → (100 / 5) * 2 = 40

let result4 = 10 + 20 / 5 + 3;
console.log("10 + 20 / 5 + 3 =", result4); // Division happens first → 10 + (20 / 5) + 3 = 17

let result5 = 2 ** 3 * 2;
console.log("2 ** 3 * 2 =", result5); // Exponentiation (**) happens first → (2 ** 3) * 2 = 16

let result6 = 10 % 3 + 2 * 5;
console.log("10 % 3 + 2 * 5 =", result6); // Modulus first, then multiplication → (10 % 3) + (2 * 5) = 1 + 10 = 11

let result7 = 10 - 2 + 3;
console.log("10 - 2 + 3 =", result7); // Left-to-right evaluation → (10 - 2) + 3 = 11

// Using parentheses to change precedence
let controlledResult = (10 + 5) * (2 ** 2) / 5;
console.log("(10 + 5) * (2 ** 2) / 5 =", controlledResult); // Parentheses first, then exponentiation, then multiplication/division


