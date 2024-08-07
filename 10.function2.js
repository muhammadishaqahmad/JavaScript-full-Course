function calculatePrice (num1) {
    return num1;
}
// console.log(calculatePrice(2));
// console.log(calculatePrice(57, 34, 34)); // the other values is not printed b/c we have one parmeter in function

function calculate(...num1) { // here the ...num1 is rest operator
  return num1;
}
//console.log(calculate(57, 34, 34)); // [ 57, 34, 34 ] it will make the araay of elements

function value (val1, val2, ...num1) {
    return num1;
}
//console.log(value(200, 300, 400, 500, 1000));// [ 400, 500, 1000 ] b/c the 200 is store in val1 and 400 is stroe in val2 . sa the remaining will be printed

// function with object
const user = {
    userName : "xyz",
    age : 25
}
function handleObject(anyobject) {
console.log(`user name is ${anyobject.userName} and age is ${anyobject.age}`);
}
//handleObject(user)

const obj = {
    name: "xyz",
    age: 25,
    loction : "newyork",
    occupation: "software engineer"
}
function handleObj( anyobject) {
    console.log(`My name is  ${anyobject.name} . my age is ${anyobject.age}, i am from ${anyobject.loction} and my occupation is ${anyobject.occupation} `);
}
//handleObj(obj);

// function with Array
 const myNewArray = [23, 434, 343, 33]
function returnSecondValue( getArray) {
     return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300])); // direct give array





