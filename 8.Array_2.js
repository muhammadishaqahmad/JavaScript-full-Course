const marvelHeros = ['thor', 'Ironman', 'Spiderman']
const dcHeros = ['SuperMan', 'flash', 'BatMan']

//marvelHeros.push(dcHeros);
// console.log(marvelHeros); // output is [ 'thor', 'Ironman', 'Spiderman', [ 'SuperMan', 'flash', 'BatMan' ] ]
// console.log(marvelHeros[3][1]); // output is flash

const allHeros = marvelHeros.concat(dcHeros);
//console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]; // this is Spride method :- e.g( glass break down and spride every where  )
//console.log(allNewHeros);           // both conscat and spride output result is same but recommended mothed is spride

const anOtherArry = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]; // if there is an array in which element is an array in array in array
//console.log(anOtherArry.flat(Infinity)); // flat can make an array in which all element is in one arrray

console.log(Array.isArray('ishaq')); // ask question

console.log(Array.from("ishaq")); // the from convert it into an Array [ 'i', 's', 'h', 'a', 'q' ]

console.log(Array.from({name: 'ishaq'}));

let score1 = 100;
let score2 = 300;
let score3 = 500;

console.log(Array.of(score1,score2,score3)); // the score variables is convert into an array 
 
