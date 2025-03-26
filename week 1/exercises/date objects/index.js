// A Date object in JavaScript is used to work with dates and times. 
// You can create a Date object to get the current date, set a specific date, manipulate time, and format it.

// it follows the order (year, month, day, hour, min, sec, milsec)
//to get current date/time VV
const date = new Date();
//to get custom time 
const customDate = new Date(2024,0,1,2,3,4,5);

// current year 
 const year = date.getFullYear()

 // current month 
 const month = date.getMonth()

 const day = date.getDate()

 const hour = date.getHours();

 const minutes = date.getMinutes();

 const seconds = date.getSeconds()

 const dayOfWeek = date.getDay();



console.log (dayOfWeek);
console.log(seconds);
console.log(minutes)
console.log(hour);
console.log(day);
console.log(month);
console .log(year);
console.log(date);
console.log(customDate);

//------------------you can set the date -------------------//

const setDate = new Date ();

setDate.setFullYear(2024);

console.log(setDate);

//--------------------comparing dates ---------------------------//

const date1 = new Date(`2024-11-30`);
const date2 = new Date(`2025-1-30`);

date2 > date1 ? console.log(`happy new year`) : console.log(`its almost new years`);
