/**
 * Example 1
 * 
 * Simplest function in javascript
 */

 function myFunction() {} 
 console.log(myFunction);//ƒ myFunction() {}

 myFunction();//here we see nothing as function contain nothing 
// this function return undefined as no return statement written 
// but we didn't see any undefined on console
// to see we need to assign this function to a variable or directly get output of function on console
console.log(myFunction());
// difference in writting myFunction and myFunction()
// myFunction is variable which stores function
// myFunction() is function call
const functionResult = myFunction();
console.log(functionResult);

console.log(myFunction(10,true));//we can call any function with argument which doesn't have any parameters

/**
 * Example 2
 * 
 * parameters of the function
 */
function myFunction2(a,b) {
    console.log(a);
    console.log(a+b); 
}
myFunction2(10,5);//15
myFunction2();// undefined for a and for a+b is NaN as both a and b are undefined and sum of two undefined is Not a number
myFunction2(1);// 1,Nan as 1+undefined is not a number
// here myFunction2() returns undefined as not return statement inside it
console.log(myFunction2(4,3));//4,7,undefined

/**
 * Example-3
 * 
 * Function scope
 */
function myFunction3(a,b) {
    console.log(a,b);
}

console.log(myFunction3(3,2));

//console.log(b);
//console.log(a); //function.js:49 Uncaught ReferenceError: a is not defined scope of variables of parameters are just inside only 

/**
 * Example 4
 * 
 * Reuse parameter names 
 */
function myFunction4(a,b) {
    console.log(a,b);
}
function myFunction5(a,b) {// these a and b are called function scope
    console.log(a,b);
}
// here in above a,b are in scope o that perticular function only
const a= true;// these a and be are of global scope
const b =0;// we can have same variable name outside also as function vale a,b da scope othe tak he simit hai 
myFunction4(3,4);
myFunction5(5,6);
console.log(a,b);

/**
 * Example 5
 * 
 * Add "return"
 */

function sum(a,b){
    return a+b;
}
console.log(sum(10,5));//15
console.log(sum("abc",4));//abc4
console.log(sum());//NaN as both and be are undefined 

/**
 * Example 6 
 * 
 * What happens after "return" ?
 */
function myFunction(a){
    console.log(a);
    return a ;// function stops here
    console.log(a);// unreachable code
    const c = 10 ;

}

myFunction(a);

/**
 * Challenge 1
 * 
 * Create function called "mult" and it will
   have 3 parameters.
 * Create new variable and assign to it result 
   of mutiplication of all 3 parameters 
 * Print on console result.
 * Don't use "return"
 */

function mult(a,b,c) {
    let result = a*b*c;
    console.log(result);
}

mult(1,2,3);//6
mult(1,3,"asd");//NaN
console.log(mult(2,3,5));// 30 is printed inside of function and function returns undefined

/**
 * Challenege 2 
 * 
 * Created a function 
  "concatenateStrings" and it will have 2 parameters
 * And this function will return concatenated string
 */

 function concatenateStrings(str1,str2) {
     return str1 + " " + str2;
 }
concatenateStrings("hello","world");//nothing on console
console.log(concatenateStrings("hello","world"));
//or
const str3 = concatenateStrings("Fuck","off");
console.log(str3);

/**
 * Challenge 3
 * 
 * create function "outerFunction" with 2 parameters
 * create function inside of the "outerFunction" and name it "innerFunction" with one parameter
 * this "innerFunction" will return of parameter (parameter*parameter)
 * 
 * In the "outerFunction" sum both parameters
 * call "innerFunction" with argument that is equal to sum of both parameters of the "outerFunction" 
 * log out the console result of the "innerFunction" call.
 */

 function outerFunction(a,b) {
     
     function innerFunction(c){// this inner function is available for outerFunction() only you cannot excess it in console or outside outerFunction
         console.log(c*c);
     }
     console.log(a+b);// or create new variable 
     innerFunction(a+b);
 }

outerFunction(1,2);// 3,9

/**
 * Example 7
 * 
 * Try to "declare" fuct ion expressions
*/
// It is not possible to use function expression standalone
//function() { } //Uncaught SyntaxError: Unexpected token (

/**
 * Example 8
 * 
 * Assign function expression to the variable 
 */
const myFunction8 = function(){ } ;
myFunction8();// nothing 
console.log(myFunction8());//undefine
console.log(myFunction8);//ƒ (){ } 

/**
 * Example 9
 * 
 * callback function
 */
setTimeout(function(){
    console.log("delayed message")
},3000);// here setTimeout function calls the first argument in number of milli seconds of second argument
// in above we can pass named function also but this doesn't make much sense to give name here

/**
 * Example 10 
 * 
 * Callback function (example 8)
 */
// let i = 1;
// setInterval(function(){
//    console.log("message logged each 1 second"+ i);
//    i=i+1;
// },1000)

/**
 * Challenge 8
 * 
 * Use following built in functions
 * setTimeout
 * setInterval
 * clearInterval
 * 
 * You should print to the console only 5 messages with interval 2 seconds
 * "Here is message number 1"
 * "Here is message number 2"
 * "Here is message number 3"
 * "Here is message number 4"
 * "Here is message number 5"
 */







