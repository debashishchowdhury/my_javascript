//Number and Bigint
let num = 7;
let bigint = 999999999n;
console.log(num);
console.log(bigint);

//String
let greet = "Hi";
console.log(greet);

//Boolean
let istrue = true;
let isfalse = false
console.log(istrue);
console.log(isfalse);

//Null and Undefined
let finishcoursetime = undefined;
let grade = null;
console.log(finishcoursetime);
console.log(grade);
function help() {

}
console.log(help);
function help() {
  return null;
}
console.log(help);

//Object 
const user = {}
user.fname = "John";
user.lname = "Cena";
user.age = 45;
user.move = "AA";
console.log(user);

const person = {
  name: "Randy",
  age: 40,
  move: "RKO",
}
console.log(person);

//Arithmetic Operators
let sum = 5 + 5;

let difference = 10 - 5;

let product = 5 * 10;

let quotient = 10 / 5;

let remainder = 10 % 5;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

//String Interpolation/Concatenation
let age = 40;

let string = 'Ronaldo is ' + age + ' years old.';
console.log(string);

//Variables
const currency = '$';
let userIncome = 85000;
console.log(currency + userIncome + ' is more than the average income.');

//Undefined
//variable can be defined using the term var, const, and let
let a;

console.log(a);

//let Keyword
let count;
console.log(count);
count = 10;
console.log(count);

//Methods

//String .length
let text = 'Hello, how are you?'
console.log(text.length);

//Math.random()
console.log(Math.random());

//Math.floor()
console.log(Math.floor(5.95));

/* Mutiline
comments
*/

//Remainder / Modulo Operator

//Comparison Operators
let nostring = '10';
let no2  = 10;
console.log(nostring == no2);
console.log(nostring === no2);
console.log(nostring != no2);
console.log(nostring !== no2);

//Logical Operators

const topper = true;
const player = true;

// AND Operator
let student = topper && player;
console.log(student);

const attack = true;
const defence = false;

// OR Operator
let footballer = attack || false;
console.log(footballer);

// NOT Operator
const guy =! student;
console.log(guy);


//Unary Operator or data type

let str = 'ball';
console.log(typeof str);

//Methods
console.log('hello'.toUpperCase());

console.log(Number.isInteger(7))


