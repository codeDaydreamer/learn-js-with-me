/*let day = prompt("Enter a day of the week:").toLowerCase(); // Get user input

switch (day) {
    case "monday":
        console.log("Start of the week! Stay motivated! 💪");
        break;
    case "tuesday":
        console.log("Keep pushing forward! 🚀");
        break;
    case "wednesday":
        console.log("Midweek! Halfway there! 🏃‍♂️");
        break;
    case "thursday":
        console.log("Almost the weekend! 🎉");
        break;
    case "friday":
        console.log("Weekend is near! Have fun! 😃");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy your weekend! 🏖️");
        break;
    default:
        console.log("That doesn't seem like a valid day. 🤔");
} */


//using case true 
let age = parseInt(prompt("Enter your age:"));

switch (true) {
    case age >= 0 && age <= 12:
        console.log("You're a child. 🧒");
        break;
    case age >= 13 && age <= 19:
        console.log("You're a teenager. 🧑");
        break;
    case age >= 20 && age <= 64:
        console.log("You're an adult. 👨‍💼");
        break;
    case age >= 65:
        console.log("You're a senior citizen. 👴");
        break;
    default:
        console.log("Invalid age entered. 🤔");
}
