//Type Conversion in JavaScript
//Type conversion is the process of converting a value from one data type to another. JavaScript has two types of type conversion:
//Implicit Conversion (Type Coercion) → JavaScript automatically converts the type.

// Number + String → String
console.log(5 + "10"); // "510" (Number is converted to String)

// String - Number → Number
console.log("10" - 5); // 5 (String is converted to Number)

// String * Number → Number
console.log("5" * 2); // 10 (String is converted to Number)

// Boolean to Number (true → 1, false → 0)
console.log(true + 2); // 3 (true is converted to 1)
console.log(false + 2); // 2 (false is converted to 0)

// Null to Number (null → 0)
console.log(null + 5); // 5

// Undefined in arithmetic → NaN (Not a Number)
console.log(undefined + 5); // NaN

//Explicit Conversion (Type Casting) → You manually convert the type using functions.

