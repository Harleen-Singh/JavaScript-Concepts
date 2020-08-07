// CALL
const myObject = {
    a: 10,
    b: null
};

function myFunction(a, b) {
    console.log(a + b);
    console.log(this);
}

myFunction(); // "this" is Window

myFunction.call(myObject); //"this" is myObject {a: 10, b: null}

myFunction.call(myObject, 10, 3); // "this is {a: 10, b: null}" and sum da result 13 hai as agle arguments are passed as parameter for function 

// EXAMPLE 3 - CALL - Call method of the object with other as "this"
const person1 = {
    city: "New York",
    name: "Bob",
    info: function() {
        console.log(this.name + " lives in " + this.city);
    }
}

const person2 = {
    city: "Paris",
    name: "Alice"
}

person1.info();

person1.info.call(person2);


// EXAMPLE 4 - APPLY - custom "this" and arguments - ethe sirf arguments da faraq hai we pass argument as array and in order it get assigned to parameters of function

myFunction.apply(myObject, [10, 3]);

function sum (a,b,c) {
    let sum = a + b + c;

    for (let key in this) {
        if (typeof this[key] === "number") {
            sum += this[key];
        }
    }

    console.log(sum);
}

sum.apply(myObject,[10, 3, 5]); // "this" is {a: 10, b: null}


// Example 5 - BIND - In above call and apply function is called immediatly but here using bind we can call function later on 
const myObject1 = {
    a: 10,
    b: null
};

function myFunction1(a, b) {
    console.log(a + b);
    console.log(this); // myObject1
}
myFunction1.bind(myObject1, 10, 20);// nothing happens as using bind brand new function is created to use that assign it to other variable

const customFunction = myFunction1.bind(myObject1, 10, 3) ; // preset "this" and both arguments

customFunction();

const customFunction1 = myFunction1.bind(myObject1); // preset only "this"

customFunction1(20,6);// call with custom arguments


/**
 * Challenge 3 
 * Create "customFunction2" that will preset "this" and only first argument
 * After that call "customFunction2" with a single argument
 */

const customFunction2 = myFunction1.bind(myObject1, 50); // here we bind two arguments only

customFunction2(20);


