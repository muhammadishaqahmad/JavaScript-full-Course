let myDate = new Date();
// console.log(myDate);    // output date is 2024-07-28T17:40:51.147Z
//console.log(typeof myDate); // object

// console.log(myDate.toISOString());  // 2024-07-28T17:40:51.147Z
// console.log(myDate.toString())     // Sun Jul 28 2024 22:45:14 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toUTCString()); // Sun, 28 Jul 2024 17:46:21 GMT
// console.log(myDate.toLocaleDateString());  //7/28/2024
// console.log(myDate.toJSON());             //2024-07-28T17:48:09.946Z

// console.log(myDate.toLocaleTimeString()); //time 10:54:39 PM
// console.log(myDate.toLocaleString()); // 7/28/2024, 10:55:43 PM
// console.log(myDate.toTimeString());   // 22:57:04 GMT+0500 (Pakistan Standard Time

let myCretaeDate = new Date(2023, 0, 21 ,5,3); // your own create Date and time
// console.log(myCretaeDate);
// console.log(myCretaeDate.toLocaleString()); //1/21/2023, 5:03:00 AM

console.log(myCretaeDate.getTime()); //1674259380000 time in mile sec
console.log(Date.now()); // exixt time
console.log(Date.now()/1000);  // 1722193939.585 is converted to sec********imp*********
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getHours());
console.log(newDate.getMinutes() );
console.log(newDate.getMonth() + 1);

console.log(
  newDate.toLocaleString('default', {
     
      dateStyle:"full"
  })
);