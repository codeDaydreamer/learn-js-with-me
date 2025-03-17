// =====================
// 1. Math Constants
// =====================
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.SQRT2:", Math.SQRT2);

// =====================
// 2. Rounding Numbers
// =====================
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.trunc(4.9):", Math.trunc(4.9));

// =====================
// 3. Random Numbers
// =====================

// Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
console.log("Random number (0-1):", Math.random());

// Generate a random integer between 0 and 9
// Math.random() generates a number between 0 and 1
// Multiplying by 10 scales it to 0 - 9.999...
// Math.floor() rounds it down to the nearest whole number (0-9)
console.log("Random integer (0-9):", Math.floor(Math.random() * 10));

//Math.floor(Math.random() * (max - min + 1)) + min;

// Generate a random integer between 5 and 10 (inclusive)
// Math.random() generates a decimal between 0 and 1
// Multiplying by (10 - 5 + 1) scales it to 0 - 6.999...
// Adding 5 shifts the range to 5 - 10.999...
// Math.floor() rounds it down to get a whole number between 5 and 10
console.log("Random integer (5-10):", Math.floor(Math.random() * (10 - 5 + 1) + 5));

// =====================
// 4. Power and Roots
// =====================
console.log("2^3:", Math.pow(2, 3));
console.log("√16:", Math.sqrt(16));
console.log("∛27:", Math.cbrt(27));

// =====================
// 5. Absolute, Min, Max
// =====================
console.log("Absolute of -10:", Math.abs(-10));
console.log("Min(4,1,7,-5):", Math.min(4, 1, 7, -5));
console.log("Max(4,1,7,-5):", Math.max(4, 1, 7, -5));

// =====================
// 6. Trigonometry
// =====================
console.log("sin(π/2):", Math.sin(Math.PI / 2));
console.log("cos(0):", Math.cos(0));
console.log("tan(π/4):", Math.tan(Math.PI / 4));

// =====================
// 7. Logarithms & Exponentials
// =====================
console.log("ln(10):", Math.log(10));
console.log("log10(1000):", Math.log10(1000));
console.log("e^1:", Math.exp(1));


