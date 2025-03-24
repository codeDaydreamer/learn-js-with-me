// these are special methods for constructing propersties and methods of an object

function Car (make , model , year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function () {console.log(`You drive the ${this.model}`);}
}

const car1 = new Car (`Ford`, `Camaro`, 2024, `red`);
const car2 = new Car (`Toyota`, `Camry`, 2025, `green`);
const car3 = new Car (`Suzuki`, `Gymny`, 2025, `white`);


console.log(car1.make);
car1.drive();
car2.drive();
car3.drive();


