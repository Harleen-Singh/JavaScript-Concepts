/** 
 * 1 Make code readable for other developers
  
 */

 // BAD Code
a = "harleen";
b = "india";

function test(x,y) {
    d = "Hello " + x + " from " + y;
    return d;
}

var a, b, d;

console.log(test(a,b));

// problem in above code that a, b are not meaning full and function name is also not having any meaning and we are declaring variable at last and variable d is used only inside function but it is declared globally

// rewrite of above code

// GOOD Code
var personName = "harleen";
var personCity = "india";

function greet(personName, personCity) {
    var greetPerson = "Hello " + personName +  " from" + personCity;
    return d;
}



console.log(test(personName,personCity));

// now code is more structured and easy to read

/**
 * 2 Always declare variables before first usage
 * var will not give issue in it 
 * but let and const will give error in this 
 */
e = 10;
//var a;// np 
//let e;// Uncaught ReferenceError: Cannot access 'e' before initialization

/**
 * 3 Always add "use strict" at the beginning of code
 */
//"use strict"; // error using use strict // directive that is introduced in ES 5
b = 10;
function fn () {
    d=b;
    return d;
}
fn();
/**
 * 4 Don't expose to the outer scopes locally used variables 
     means that all variables must be as hidden as possible
 */
// function fn2() {
//     myArray = [1,2,3];
//     for (i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);
//     }
// }

// fn2();
// now in above code what is need of exposing i to global as it is only working in for loop and myArray is only req in function why to expose globally
function fn2() {
    var myArray = [1,2,3];
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}// now myArray and i are not accessable outside function

fn2();



