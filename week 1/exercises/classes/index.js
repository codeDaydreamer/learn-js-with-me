// In JavaScript, classes are a way to create reusable blueprints for objects. 
// They were introduced in ES6 (ECMAScript 2015) and provide a cleaner, more structured way to work with objects 
// and inheritance compared to traditional constructor functions and prototypes.


class Product {
    constructor(name, price){
        this.name = name,
        this.price = price
    }

    displayProduct(){
        console.log(`Product Name : ${this.name}`);
        console.log(`Product Price : KES ${this.price.toFixed(2)}`);

    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product (`Shirt`, 300);

//console.log(product1.price);

//product1.displayProduct();
//console.log(product1.calculateTotal(salesTax));

// The static keyword in JavaScript is used to define static methods and properties in a class.
// These methods and properties belong to the class itself rather than its instances. 
// This means they can be called without creating an object of the class.


class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }
}

//console.log(MathUtil.getDiameter(10));
//console.log(MathUtil.getCircumference(10));

// example two

class User {


    static userCount = 0;

    constructor (username){

        this.username = username,
        User.userCount ++

    }

    sayHello(){
        console.log(`Hey there !,,i'm ${this.username}`);
    }

    static getUserCount(){
        console.log(`The total number of users are ${User.userCount} in the system`)
    }
}

const user1 = new User (`Spongebob`);
const user2 = new User (`Patrick`);


//user1.sayHello();
//User.getUserCount();
//console.log(`Total users are :`, User.userCount);

// Inheritance in JavaScript is a mechanism that allows one class to inherit properties and methods from another class. 
// This helps in reusing code and establishing relationships between objects.

class Animal {
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

}

class Rabbit extends Animal {
    name = `rabbit`;

    run(){
        console.log(`this ${this.name}  is running`);
    }
}

class Fish extends Animal {
    name = `Fish`;

    swim(){
        console.log(`this ${this.name}  is swimming`);
    }
}

class Hawk extends Animal {
    name = `Hawk`;

    fly(){
        console.log(`this ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//rabbit.eat();

//fish.sleep();

//hawk.fly();

// The super keyword in JavaScript is used to access and call methods from a parent class.
// It is primarily used in constructor functions and method overriding when working with class inheritance.

class Animals {

    constructor(name, age){
        this.name = name,
        this.age = age

    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} km/h`)
    }
}

class Rabbits extends Animals{

    constructor(name, age, runSpeed){

        super(name, age);
        this.runSpeed = runSpeed

    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Hawks extends Animals{

    constructor(name, age, flightSpeed){

        super(name, age);
        this.flightSpeed = flightSpeed

    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flightSpeed);
    }
}

class Fishes extends Animals{

    constructor(name, age, swimSpeed){

        super(name, age);
        this.swimSpeed = swimSpeed

    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
    
}

const rabbits = new Rabbits (`Rabbit`, 1, 100);
const fishes = new Fishes (`Fish`, 2, 150);
const hawks = new Hawks (`Hawk`, 3, 200);

hawks.fly();

console.log(rabbits.name);
console.log(rabbits.age);
console.log(rabbits.runSpeed);