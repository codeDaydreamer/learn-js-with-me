// In JavaScript, an object is a collection of key-value pairs (also called properties). 
// Objects help store and organize data in a structured way.
// 📌 Think of an object like a real-world thing → A car, for example, has properties like color, model, brand, and speed.

const person1 = {
    firstName : `spongebob`,
    lastName : `squarepants`,
    age : 21,
    isEmployed : true,
    sayhello : () => console.log(`Hey there ! I'm Spongebob`),
    eat: (food) => console.log(`I just ate your ${food}!`),
}

const person2 = {
    firstName : `patrick`,
    lastName : `star`,
    age : 22,
    isEmployed : false,
    sayhello : () => console.log(`Hey there ! I'm Patrick Star`),
    eat: (food) => console.log(`I just ate your ${food}!`)
}

//person2.sayhello();
//person1.eat(`pizza`);

//In JavaScript, this refers to the object that is executing the function.
// When used inside an object method, this points to the object itself.

const person3 = {
    firstName : `kevin`,
    lastName : `dev`,
    favFood : `pilau`,
    age : 22,
    isEmployed : false,
    sayhello : () => console.log(`Hey there ! I'm Patrick Star`),
    eat: (food) => console.log(`I just ate your ${food}!`),
    getFavFood: function() {console.log(`My fav food is ${this.favFood}`);}
}

person3.getFavFood();