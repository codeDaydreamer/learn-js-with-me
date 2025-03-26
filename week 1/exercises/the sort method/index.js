// JavaScript's default .sort() method uses lexicographical (dictionary) order when sorting strings. 
// This means it compares characters based on Unicode values, similar to how words are arranged in a dictionary.

let fruits = [`apples`, `oranges`, `bananas`, `pineapples`,`coconut`];
let numbers = [9,4,3,5,2,1,8,7,10,0,6];

fruits.sort();
numbers.sort((a, b) => a-b);

console.log(fruits);
console.log(numbers);

const people = [{name : `spongebob`, age : 20, gpa : 100},
                {name : `patrick`, age : 70, gpa : 400},
                {name : `squidward`, age : 10, gpa : 190},
                {name : `sandy`, age : 36, gpa : 890},
]

//people.sort((a, b) => a.gpa - b.gpa);

// to sort strings property
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);