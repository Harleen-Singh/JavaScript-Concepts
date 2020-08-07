/**
 * Eg 1 - Variable declaration
 **/
var a;
console.log(a);
//console.log(b); //variable.js:6 Uncaught ReferenceError: b is not defined


let c;
console.log(c);

//const d;//Uncaught SyntaxError: Missing initializer in const declaration


/**
 * Example 2 - "let"
 */
let myNumber = 10;
console.log(myNumber);

let mySring;
myString = "hello from let string";
console.log(mySring);
console.log(myString);
myString = "new let string";
console.log(myString);

/**
 * Example 3
 */
var myNumber1 = 15;
console.log(myNumber1);

var mySring1;
myString = "hello from var string";
console.log(mySring1);
myString1 = "new var string";
console.log(myString1);

/**
 * Example 4 -"const"
 */
const myBoolean = true;

console.log(myBoolean);

//myBoolean = false;//Uncaught TypeError: Assignment to constant variable.
// const myBoolean = false; //Uncaught SyntaxError: Identifier 'myBoolean' has already been declared
 

/**
  * Challenge 1
  * 
  * Declare variable "myObject" and assign value {}
  * Print this variable to console 
  * NOTE: variable "myObject" will not be reassigned in the future
  */
 const myObject = {};
 console.log(myObject);


 /**
  * Challenge 2 = variable reusablity
  * Declare "x" and assign value 10 to it.
  * Declare "y" and assign value true to it/
  * Declare "myObject" and assign object with two name-vale pairs
  * on console.log(myobject) 
  * output should be {a:10, b:true, __proto__: Object}
  * Declare "anotherObject"
  * later assign value to it - object with three name value pair
  * on console.log(anotherObject) 
  * output should be {newA:20, b:true, c: {a:10, b:true, __proto__: Object}}
  */
 var x = 10;
 const y = true;
 const myobject = {a:x, b:y };
 console.log(myobject);
x=20;
 var anotherObject;
 anotherObject ={newA:x, b:y, c:myobject};
 console.log(anotherObject);

z=x;
console.log(z);

let myVariable;

console.log(myVariable); 

myVariable = 10;
console.log(myVariable);
console.log(typeof(myVariable));

myVariable = true;
console.log(myVariable);
console.log(typeof(myVariable));

myVariable = {
  x: true,
  y: 10
}
console.log(myVariable);
console.log(typeof(myVariable));

myVariable.x = 20;
console.log(myVariable);

myVariable = null;

//myVariable.x= "hello";//Cannot set property 'x' of null hun myvariable null ho chukka hai not a object

