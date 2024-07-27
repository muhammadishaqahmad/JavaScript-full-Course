// Primitive Data Type :- Orignal Value Can't change , give copy of orignal Value

// 7 types

            // string
            // Number
            // Boolean
            // BigInt
            // Symbol
            // null
            // undefined 

// Reference (Non Primitive) : -  Give the reference of Orignal value and orignal value can change
 
// Array
//Object
//Functions
 
let temp = null
let undefinedVariable;
const id = Symbol('1213')
const anOtherId = Symbol('1213') // symbol is a unique value

console.log(id === anOtherId); // they  both  are same value but they are not equal b/c of uniquines

const bigNumber = 12342345345564565n; // bigInt is end with n
 
const namedArray = ["Ali", "Ahmad", "Khan"]

let myObj = {
    name: "IShaq",
    age: 22
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof temp);               // object
console.log(typeof undefinedVariable);  // undefined
console.log(typeof bigNumber);          // bigint
console.log(typeof id);                 // symbol
console.log(typeof namedArray);         // object
console.log(typeof myObj);              // object
console.log(typeof myFunction);         // function object


//******************************************************************************************/
// memory :-
  
//Stack( primitive ) , Heap (Non Primitive)

// Stack :- _-`  orignal value can't change give us the copy of orignal value
 
let name = "IShaq"
let anOtherName = name // for here the name give copy of orignal value
anOtherName = "khan"
 console.log(name);
 console.log(anOtherName);

// Heap:- 
let user1 = {
    email: "ishaq@gmail.com",
    password:"12132"
}
let user2 = user1
user2.email = "khan@gmail.com" 
  
console.log(user1.email); // for here the user 1 orignal value can change 
console.log(user2.email); // user1 and user2 same same valued 



  