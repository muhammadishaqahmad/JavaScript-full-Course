// Object

// creatio of an Object has two type
// 1. Singleton:-  which is created bd Constructor
// 2. Object literals :-  object initializer

// Object Literals

const jsUser = {
  name: 'IShaq',
  age: 22,
  location: 'Peshawar',
  email: 'ishaQ@gamil.com',
  isLoggedIn: false,
  lastLoggedIn: ['mon', 'thu'],
};

// Access Object

//// console.log(jsUser.name); // 1st method

//// console.log(jsUser['age']); // 2nd method

// Question :- create A symbol  ,add that symbol in the keys of object and print it

const mySymbol = Symbol('hi');
const anOthermySymbol = Symbol('xyz');
const User = {
  name: 'IShaq',
  "lastName": 'khan', // this is access by 2nd mehtod of object accessed
  age: 22,
  location: 'Peshawar',
  email: 'ishaQ@gamil.com',
  isLoggedIn: false,
  lastLoggedIn: ['mon', 'thu'],
  mySymbol: 'hi', // this is not a symbol , its look like a symbol but when we typeOf it , it will return String not symbol
  [anOthermySymbol]: 'xyz',
};
// console.log(User['lastName']);
// console.log(User.mySymbol); // its not a symbol
// console.log(typeof User.mySymbol); // String

// console.log(User[anOthermySymbol]);

User.email = "hi@google.com" // change email value
// // console.log(User);

//Object.freeze(User); // no more changes
User.location = "lahore"; // this value is not change b/c of we freeze the object
// console.log(User);

User.greeting = function () {
    console.log('Hello world');
}
console.log(User.greeting); //[Function (anonymous)]

User.greetingTwo = function () {
  console.log(`Hello ,${this.name}`);
};
console.log(User.greetingTwo());
