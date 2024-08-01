const myArr = [1, 2, 3, 4, 5]
const anOtherArr = [32, 45, 56, 'hi', true]

// console.log(myArr[0]);
// console.log(anOtherArr);

const myArr2  = new Array (1, 3, 4, 446, 7) // 2nd method of declared Array

myArr.push(45);    // add element in the Array 
//console.log(myArr);  

myArr.pop();       // remove the  last element
//console.log(myArr);


myArr.unshift(10);// it will add an element at the starting position
//console.log(myArr);

myArr.shift(10); // it will remove for an element at the starting position
//console.log(myArr);

// console.log(myArr.includes(9)); // false 
// console.log(myArr.indexOf(23)); // output is -1 :- when its is false the the output is -1
// console.log(myArr.indexOf(4)); // output is 3

const newArr = myArr.join();
// console.log(newArr); //   output is 1,2,3,4,5 . the values of myArr and newArr is same but the myArr type of is Array and newArr typeOf is string
// console.log(typeof newArr);  // Srting
// console.log(myArr);

// Slice And Splice

console.log('A', myArr); // orignal Array

const myArr1 = myArr.slice(1, 3); // range value can,t be conuted in slice 
console.log(myArr1); // slice part
console.log('B', myArr);  // slice array has origanl array

const myArr3 = myArr.splice(1, 3); // range value can be conuted in slice 
console.log(myArr3); // splice part
console.log('C', myArr);  // splice array the orignal array cant remain the same , the splice part is remove from orignal Array





