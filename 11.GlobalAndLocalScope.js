// let a = 10
// const b = 1200
// var c = 90

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 10;
    const b = 1200;
    var c = 90;
}
//console.log(a); // a is not defined
//console.log(b); // b is not defined
//console.log(c);

// let and cosnt are block scope element
// var is global scope element

// inspect global scope is differnt and in code the global is different

// *********************************************************************************************************

function one () {                     // this method is also called clousere in js
  const userName = 'ishaq';
  function two() {
    const website = 'youtube';
    console.log(userName);   // function one is in the scope
  }
  // console.log(website); //website is not defined .and its out of scope
  two();
}
//one();

// if (true) {
//     const userName = "ishaq"
//     if (userName === "ishaq") {
//         const website = "youtube"
//         console.log(userName + "," + website);
//     }
//     //console.log(website); // error its out of scope
// }
//console.log(userName);// error its out of scope

console.log(addOne(3));
function addOne(num1) {
    return num1 + 1;
}


//console.log(addTwo(4)); // Cannot access 'addTwo' before initialization , only use after function
const addTwo = function(num1){ // the addtwo variable hold the value
    return num1 + 2;
}
console.log(addTwo(4));
