// this:- this  is used for refer current context 
const user = {
    userName : "abc",
    price: 1232,
    welcome: function () {
      console.log(`${this.userName} welcome to website`);
      console.log(this); //{ userName: 'ishaq', price: 1232, welcome: [Function: welcome] }
    }
}
//user.welcome();
// user.userName = "ishaq";
// user.welcome();
// console.log(this); // {} in the node enviroment  it referred to {} empty object

function myfun() {
    console.log(this);
}
//myfun() // many outputs

function user1() {
     let userName = "abc"
    console.log(this.userName);
}
//user1(); // undefined this.username context is only work on object

const chia = function () {
  let userName = 'abc';
  console.log(this.userName);
};
//chia() // undefined

// Arrow function
// () => {} basics syntex of arrow function

const addTwoNumber = (num1, num2) => {
    return num1 + num2;
}
//console.log(addTwoNumber(34, 56));

const addTwoNum = (n1, n2) => ( n1 + n2 )   // impesent return
//console.log(addTwoNum(23, 90));

// () => {} return must be used in arrow function
// () => () return not used

const sumOfTwoNum = (n1, n2) => ({ name: "ishaq" })  // return a object
    //console.log(sumOfTwoNum());

    // ***************************************************************************************

    // Immedaitely invoked function Expression (IIFE)

    // the fuction will be dricetly execute
    // e.g when the application start the DataBase connection start immedaitely
    // its remove global pullation

    // syntex: ()():- first () show defination second show execution

    // (function hi() {                 // this is named IIFE
    //     console.log("DB Connected");
    // })();

    // (function myIIFE() {
    //     console.log('This is a named IIFE');
    // })();

(function () {
  // Unnamed (Anonymous) IIFE
  console.log('Unnamed IIFE executed ');
})();

(function (name) {
  // Unnamed (Anonymous) IIFE
  console.log('Unnamed IIFE executed ' + name);
})('ishaq');

((myIIFE) => {
  console.log('Named IIFE with arrow function executed');
})();

// or

(() => {
  console.log('Unnamed IIFE with arrow function executed');
})();