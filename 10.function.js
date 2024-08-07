function sayMyName() {
    console.log("I");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("q");
}

//sayMyName(); // call a function

function addTwoNumbers(num1 , num2) {
    console.log(num1 + num2);
}
// addTwoNumbers(3,4) // 7
// addTwoNumbers(3, "4") //34
// addTwoNumbers(3, "a") //3a
// addTwoNumbers(3, null) //3 checking ....upcoming
// const result = addTwoNumbers(3, 5) // 8
// console.log(result);  //  undefined

function SumOfTwoNumber(num1, num2) {
    // let result = num1 + num2;
    // return result
    return num1 + num2
}
//console.log(SumOfTwoNumber(10, 89));

function loginUserMessage(userName) {
    return `${userName} just logged in`
}
// console.log(loginUserMessage('ishaq'));//ishaq just logged in
// console.log(loginUserMessage(""));//just logged in
// console.log(loginUserMessage()); // undefined just logged in..................

   
// to solve the undefined name                           
function user(userName) {
    if (userName === undefined) {
        console.log("Please enter a user name");
        return
    }
     return `${userName} just logged in`;
}
//console.log(user());