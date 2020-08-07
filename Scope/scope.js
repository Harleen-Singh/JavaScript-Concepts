/**
 * Example 1
 * 
 * Global scope
 */
var a = 10;// put a on console you will get value of a means global variable
// a is one of property of global object window
console.log(window.a);//10
console.log(a);//10

let b = true;// same as a if we put b ons console we will get its value 
// on accessing it using global object window we get undefined 
console.log(b);
console.log(window.b);// undefinded
// if you type window on console and see its name value pair you will see a there but not b
// why ?
// b is global variable but not added in window object
// var - added in window object
// let - not added in window object 

const c = "abc";
console.log(c);// abc
console.log(window.c);//undefined
// means let and const show same behaviour means these are not added as property of global object 
// but they still remain as global variable 

function myFunction(a) {// here a is local variable of this function
    console.log(a);
    console.log(b);
}
console.log(myFunction);//ƒ myFunction(a) {console.log(a);}
console.log(window.myFunction);// f myFunction(a) {console.log(a);}
// var and function show same thing both are added as property of global object window

// all these var , let , const , function we can access every where 
myFunction();// undefined(as in argument a di value pass nai kiti hoi) , true (globla value of b is taken)

console.log("*******");
/**
 * Example 2
 * 
 * Function Scope
 */
let e ;
function myFunction1(a,b){ 
    const c = true;
    console.log(e);// undefined global ala hai eh
    console.log(c);//true
    console.log(a,b); // undefined  undefined (dono assign nai hoye fn call te ) OR // 2  3
    //console.log(d);//Uncaught ReferenceError: d is not defined at myFunction1 
}
myFunction1();
myFunction1(2,3); 
console.log(c);//abc globle vala

/**
 * Example 3
 * 
 * Scope chain
 */
 const c1 = 2;
 function sum(a,b) {
     const c1 = 3;
     function mult(a, b) {
         return a * b * c1; // c1 outer scope to aya hai just is scope to bahr (scope chain) ene globle ala nai chakkya
     }
     console.log(mult(a, b));//150
     return a + b;
 }

 const result = sum(10, 5);//15 jo return ho ke aya hai
 console.log(result);

 /**
  * Example 4
  * 
  * Undeclared variable 
  */

x = 10; // here variable "a" will be automatically declared in the global scope
console.log(x); //10
console.log(window.x);//10  eh x window di vi property bann gya same as var variable

const myFunction3 = function() {
    y =5;// automatically created as global variable
    console.log(y);
}
// yvariable ofo he bane ga jad function call hou
//console.log(y);//scope.js:89 Uncaught ReferenceError: y is not defined

myFunction3();// hun y bann gya in global object

console.log(y);

/**
 * Example 5
 * 
 * Strict mode
 */
console.log("***");


(function()
{
    "use strict";
    var foo = 123;//works fine
  //  bar = 345;//ReferenceError: bar is not defined
}());

