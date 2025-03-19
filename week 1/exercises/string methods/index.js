// String Methods in JavaScript

let text = "Hello, World!  ";

// 1. Get the length of the string
console.log("Length:", text.length);

// 2. Convert to uppercase & lowercase
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// 3. Trim whitespace from both ends
console.log("Trimmed:", text.trim());
console.log("Trim Start:", text.trimStart());
console.log("Trim End:", text.trimEnd());

// 4. Get character at a specific position
console.log("Character at index 0:", text.charAt(0));

// 5. Find the position of a substring
console.log("Index of 'o':", text.indexOf("o"));
console.log("Last index of 'o':", text.lastIndexOf("o"));

// 6. Check if string includes a substring
console.log("Includes 'World'?:", text.includes("World"));

// 7. Check if string starts/ends with a specific word
console.log("Starts with 'Hello'?:", text.startsWith("Hello"));
console.log("Ends with '!'?:", text.trim().endsWith("!"));

// 8. Extract part of the string using slice()
console.log("Slice from index 7 to 12:", text.slice(7, 12));

// 9. Extract substring using substring()
console.log("Substring from index 7 to 12:", text.substring(7, 12));

// 10. Replace a word in the string
console.log("Replace 'World' with 'JavaScript':", text.replace("World", "JavaScript"));

// 11. Replace all occurrences of a word
let multiText = "Apples are tasty. Apples are red.";
console.log("Replace all 'Apples' with 'Oranges':", multiText.replaceAll("Apples", "Oranges"));

// 12. Split a string into an array
let sentence = "JavaScript is awesome!";
let words = sentence.split(" ");
console.log("Split into words:", words);

// 13. Join an array back into a string
console.log("Join words with '-':", words.join(" "));

// 14. Repeat a string multiple times
console.log("Repeat 'Hi!' 3 times:", "Hi!".repeat(3));

// 15. Pad a number string with leading or trailing characters
let num = "42";
console.log("Pad start to length 5:", num.padStart(5, "0"));
console.log("Pad end to length 5:", num.padEnd(5, "X"));
