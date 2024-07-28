//*****************************Numbers******************************************************
const num = 400;
// console.log(num);  // output 400

const balance = new Number(499);
// console.log(balance);              // output [Number: 499]
//const num2 = console.log(balance.toString());
//console.log(typeof (num2));                   //undefined

// console.log(balance.toString()); // 499 in string form

// console.log(balance.toString().length); // 3

// console.log(balance.toFixed(2));   // output 499.00H

const anOtherNumber = 239.892
// console.log(anOtherNumber.toPrecision(3)); // 240
// console.log(anOtherNumber.toPrecision(5)); //  239.89

const hunderd = 1000000000;
// console.log(hunderd.toLocaleString()); // 1,000,000,000

//**********************************Maths**************************************************************

let maths = console.log(Math); // output is object [Math] {}
//console.log(typeof maths); // undefined

// console.log(Math.abs(-6)); // its absault  return only postive value
// console.log(Math.round(4.8)); // round the value
// console.log(Math.floor(7.6));  // take only round less value
// console.log(Math.ceil(7.6));  // take only round greater value

// console.log(Math.max(3,56,76,3,46,3,4));
// console.log(Math.min(3,56,76,3,46,3,4));

console.log(Math.random()); // give  random value between 0 and 1
console.log(Math.random() * 10); // give  random value 0 and between 0 and 10
console.log(Math.floor(Math.random() * 10)); // give  random value 0 and  between 0 and 10 with out point
console.log(Math.floor(Math.random() * 10) + 1); // +1 can remove 0

// fomula random() * (max -min +1)+mix

const max = 30
const min = 15

console.log(Math.random()*((max - min + 1) +min));
console.log(Math.floor(Math.random()*(max - min +1) + min));






 