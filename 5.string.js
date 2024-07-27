const name = 'ishaq';
const message = ' hello';
console.log(name + message + " how are you"); // not recommeded

console.log(`my name is ${name} your message is ${message}`);

const gameName = new String('ishaq'); // String another declaration method

console.log(gameName[0]); // index of characters or string

console.log(gameName.__proto__); // {}

console.log(gameName.length); // find the leght of string

console.log(gameName.toUpperCase()); // string convert to Upper Case

console.log(gameName.charAt(2));  // find the character of given index
console.log(gameName.indexOf("q")); //find the index of given character

const game = new String("ishaq-khan")
const newString = game.substring(1, 5); // end number is not include , and its  not recommendede 
console.log(newString);

const anOtherString = game.slice(0 , -2 ); // allow to give negative value
console.log(anOtherString);

const newStringone = "     welcome to javaScript     ";
console.log(newStringone.trim()); // trim remove starting and ending free spaces

const url = "https://google.com/web%20hi.com"
console.log(url.replace('%20' , '-'));       // replace function replace some thing in the string

const gN = new String('i-am-muhammad-ishaq');
console.log(gN.split("-"))  // split convert the string to array

const sentence = "the quick brown fox jumps over the lazy dog."
let index = 5;
console.log(`An index of ${index} return the character ${sentence.at(index)}`); // sentance.at(index) find the index in sentences

let index1 = -6
console.log(`An index of ${index1} return the character ${sentence.at(index1)}`); // sentance.at(index) find the index in sentences
 
const str1 = "hello"
const str2 = "World"
console.log(str1.concat(' ', str2));// concat combine to strings

console.log(sentence.endsWith('dog.')); // find the last word
console.log(sentence.startsWith("hi"));

const word = "jump"
console.log(`the word "${word}"  ${sentence.includes(word) ? 'is' : 'is not'} in sentance`);
console.log(`the word "${word}" index of is ${sentence.indexOf(word)}`);
console.log(sentence.length);
console.log(`the word "${" "}" index of is ${sentence.lastIndexOf(" ")}`);
console.log(sentence.padEnd(48, ".")); // adding something in the end

console.log(sentence.padStart(50, "hello "));

const st = "5";
console.log(st.padStart(2, '0'));

const cnicNumber = "1720178333801" 
const addCnic = cnicNumber.slice(-4);
console.log(addCnic.padStart(cnicNumber.length, "*")); // pad start finding ********8968

const mood = " i miss you"
console.log(`hello ${mood.repeat(5)} `); // repeat used








