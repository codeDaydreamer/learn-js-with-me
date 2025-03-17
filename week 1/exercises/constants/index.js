const PI = 3.1416;
console.log(PI);

//function to calculate the circumference of a circle

//radius = Number(window.prompt(`enter the value of your radies`));

//circumference = 2 * PI * radius;

//window.alert(`The circumference of the circle is ${circumference}`);

document.getElementById(`submitRadius`).onclick = function() {
    radius = document.getElementById(`radius`).value;
    circumference = 2 * PI * radius;
    document.getElementById(`result`).textContent = `The circumference of the circle is ${circumference}`;
}