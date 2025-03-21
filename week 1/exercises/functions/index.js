//functions in javascript

//function to check if a number is even or odd

function isEven (number){
    return number % 2 === 0 ? true : false;

}

console.log(isEven(14));

// function to check if email is valid 

function isEmailValid (email){
    
    return email.includes(`@`) ? `valid` : `invalid`;

}

console.log(isEmailValid(`karangmail.com`));

//variable scopes in javascript

// Global Scope
var globalVar = "I am global";
let globalLet = "I am also global";
const globalConst = "I am a constant global";

console.log("Global Scope:", globalVar, globalLet, globalConst);

function testFunctionScope() {
    // Function Scope
    var functionVar = "I exist only in this function";
    let functionLet = "I also exist only in this function";
    const functionConst = "Me too!";
    
    console.log("Function Scope:", functionVar, functionLet, functionConst);
}

testFunctionScope();
// console.log(functionVar); // Uncaught ReferenceError

function testBlockScope() {
    if (true) {
        var blockVar = "I ignore block scope!";
        let blockLet = "I am block-scoped";
        const blockConst = "Me too!";
        
        console.log("Inside Block:", blockVar, blockLet, blockConst);
    }
    console.log("Outside Block:", blockVar);
    // console.log(blockLet); // Uncaught ReferenceError
    // console.log(blockConst); // Uncaught ReferenceError
}

testBlockScope();

