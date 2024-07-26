let score = "33"
 
// console.log(typeof score);
// console.log(typeof (score));

let valeInNumber = Number(score)  // the Number word convert any string to Number 
//console.log(typeof valeInNumber); // output is number 

let score1 = "33abc"
let valeInNumber1 = Number(score1);
//console.log(valeInNumber1);           // the conversion of 33abc is to number is Nan

let score2 = null
let valeInNumber2= Number(score2);
//console.log(valeInNumber2);           // the conveersion of null to number is 0

let score3 = Symbol;
let valeInNumber3 = Number(score3);
//console.log(valeInNumber3);          // the conversion of boolean is true is 1 and false is 0

                                                   // summary of number convertion
                                                   // sample  number in string convert to number :- number
                                                   // string like "ishaq" convert to number is :- NaN
                                                   // string with number like "22abc" convert to number :- Nan
                                                   // null convert to number :- 0
                                                   // bollean convert to number :- ture is 1 , false is 0
                                                   // undefined and symble convert to number is :- Nan

let isloggedIn = 1;
let BooleanIsloggedIn = Boolean(isloggedIn);
//console.log(BooleanIsloggedIn);               // 1 is  true and 0 is false

let isloggedIn1 = "";
let BooleanIsloggedIn1 = Boolean(isloggedIn1);
//console.log(BooleanIsloggedIn1)                   // empty string is false

let isloggedIn2 = "ishaq";
let BooleanIsloggedIn2 = Boolean(isloggedIn2);
//console.log(BooleanIsloggedIn2)                  // some thing in the string is true

                                            // SUMMERY all convert to boolean
                                            //        1 => true
                                            //        0 => false
                                            //        34 => error
                                            //        "" => false
                                            //        "ishaq" => true
                                            //         null  => false
                                            //         undefined  => false

let someNumber = null
let stringNnumber = String( someNumber)
//console.log(stringNnumber);                     
                                          //summery of all convert to string
                                          // 33 => 33      typeof string
                                          // true => true  typeof string
                                          // null => null  typeof string
                                          
// ***********************************Opertations*************************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 = "hello"
let str2 = " Ishaq"
let str3 = str1 + str2
// console.log(str3);

console.log(1 + "2");
console.log("1" + 2);

console.log("1" + 2 + 2);      // output is  122
console.log(1 + 2 + "2");      // outpput is 32