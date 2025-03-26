// A nested object is an object that contains another object as a property. This structure allows you to organize data hierarchically.

const person = {
    fullName : `Spongebob Squarepants`,
    age : 30,
    hobbies : [`karate`, `jelly fishing`, `cooking`],
    addres : {
        street : `124 Conch St.`,
        city : `Bikini Bottom`,
        country : `Int. waters`
    }
}

//console.log(person.hobbies);
//console.log(person.addres.city);

//for( const property in person.addres){
    //console.log(person.addres[property]);
//}

// example two

class Person {

    constructor(name , age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address (...address);
    }

}

class Address {

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person (`Spongebob`, 30, `124 Conch St.`, `Bikini Bottom`, `Int. Waters`);
const person2 = new Person (`Patrick`, 30, `144 Conch St.`, `Bikini Bottom`, `Int. Waters`);
const person3 = new Person (`Squidward`, 30, `145 Conch St.`, `Bikini Bottom`, `Int. Waters`);

console.log(person1.address.country);