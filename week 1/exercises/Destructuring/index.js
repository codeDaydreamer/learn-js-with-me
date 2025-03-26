// Destructuring in JavaScript is a convenient way to extract values from arrays or objects and assign them to variables
//  in a single, readable statement. It simplifies data manipulation by allowing you to "unpack" values efficiently.

//----------------------------example 1 ------------------------------
//          swapping two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(a);

//---------------------------swapping two ellements in an array -------------------
const colours = [`red`, `orange`, `green`, `blue`, `indigo`];

[colours[0],colours[4]] = [colours[4],colours[0]];

console.log(colours);

//--------------------------asssigning array ellements to variables--------------//

const [firstColour, secondColour, thirdColour, ...extraColours] = colours;

console.log(firstColour);
console.log(secondColour);
console.log(thirdColour);
console.log(extraColours);

// -------------------------extracting values from objects -----------------------//

const person1 = {
    firstName : `spongebob`,
    lastName: `squarepants`,
    age : 20,
    job : `frycook`,
}

const person2 = {
    firstName : `patrick`,
    lastName: `star`,
    age : 20,
}


const {firstName, lastName, age, job=`unemployed`} = person2; //setting default value

//-----------------destructuring in funtion parameters -----------------------------------------//

function displayPerson({firstName, lastName, age,job=`unemployed`}){
    console.log(`name ${firstName} ${lastName}`);
    console.log(`age ${age}`);
    console.log(`job ${job}`);

};

displayPerson(person2);

