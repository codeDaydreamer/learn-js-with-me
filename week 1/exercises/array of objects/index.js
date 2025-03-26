const fruits = [{name : `apple`, colour: `red`, calories : 95},
                {name : `orange`, colour: `orange`, calories : 25},
                {name : `banana`, colour: `yellow`, calories : 105},
                {name : `banana`, colour: `yellow`, calories : 105},
                {name : `coconut`, colour: `white`, calories : 75},
                {name : `pineapple`, colour: `yellow`, calories : 37}
];

console.log(fruits[0].calories);

fruits.push({name: `grapes`, colour:`purple`,calories: 100});
console.log(fruits);

//fruits.splice(1, 2)
//console.log(`spliced fruits : ` ,fruits);


//-------------------------.forEach()--------------------------------//

fruits.forEach(fruit => console.log(fruit.name));

//---------------.map()-----------------------------------//

const fruitNames = fruits.map(fruit => fruit.name);

console.log(fruitNames);

//----------------------.filter()----------------------------//

const yellowFruits = fruits.filter(fruit => fruit.colour === `yellow`);

console.log(yellowFruits);

//--------------------------.reduce() ----------------------------//

const highestCalories = fruits.reduce((maxFruit, currentFruit) => currentFruit.calories > maxFruit.calories ? currentFruit : maxFruit);
const lowestCalories = fruits.reduce((minFruit, currentFruit) => currentFruit.calories < minFruit.calories ? currentFruit : minFruit);

console.log(highestCalories);
console.log(lowestCalories);