// Singleton object
const trinderUser = new Object(); // this is singleton or Constructor object
//console.log(trinderUser);
trinderUser.id = "123";
trinderUser.name = "ishaq";
trinderUser.isLoggedIn = true;
// console.log(trinderUser);
// console.log(trinderUser.id);
// console.log(trinderUser.name);

const regularUser = {
    email : "xyz@gamil.com",
    name: {
        userName: {
            fastName: "mi",
            lastName: "Khan"
        }
    }
}
//console.log(regularUser.name.userName?.fastName);

//Merge objects
const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj3 = { obj1, obj2 }
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } .....object within object

const obj4 = Object.assign(obj1, obj2);
const obj5 = Object.assign({} ,obj1, obj2); // the obj4 and obj5 both are same but the obj5 preferred to use
//console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj6 = { ...obj1, ...obj2 } // this method is preferred to use
//console.log(obj6);

const Users = [
    {id: "1", email: "xzy.com"},
    {id: "2", email: "xzy2.com"},
    {id: "2", email: "xzy3.com"}
]
//console.log(Users[0].email);

// console.log(trinderUser);
// console.log(Object.keys(trinderUser)); // [ 'id', 'name', 'isLoggedIn' ] print only keys of the object in array form
// console.log(Object.values(trinderUser));//[ '123', 'ishaq', true ]
// console.log(Object.entries(trinderUser));//[ [ 'id', '123' ], [ 'name', 'ishaq' ], [ 'isLoggedIn', true ] ] // each key and value in array form

// console.log(trinderUser.hasOwnProperty("id"));// true  .... ask question
// console.log(trinderUser.hasOwnProperty("location"));

// ***********************************************************************************************************************

// Destructure

const course = {
    courseName : "JS",
    price: "999",
    courseInstructor : "xyz"
}
//console.log(course.courseInstructor);

//const { courseInstructor } = course            // instruct the courseInstructor value from course
// console.log(courseInstructor);                
const { courseInstructor: instructor } = course  // give short name to course instructor
console.log(instructor);

//React part
// const navbar = (props.company) => {
//                ({company}    )  // direct  use this line
// }
// navbar(company = "ishaq")

//Json
// {
//     name: "abc",
//     courseName: "js",
//     price : "999"     
// }

