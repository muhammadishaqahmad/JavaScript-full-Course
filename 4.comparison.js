// sample comparison
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); // first the "2" is convert to number then comparsion
console.log("02" > 1);

console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null != 0); // this type of conversion can not give us accutal result

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined != 0); // this type of conversion can not give us accutal result

console.log("2" === 1); // this type of compersion can check the datatypes if the data types are different then its give us error
console.log(4 === 4);