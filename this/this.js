/**
 * Example 1 this in global execution context
 */
console.log(this);// window
console.log(this === window);//true
this.console.log("hello");// hello as this is equivalent to window and console is property is of globle object window

/**
 * Example 2 this inside of function 
 * it returns the object thru which or object under which this property exist  
 */

 const myFun = function()
 {
     console.log(this);//window
 }
 
 myFun();// automatically called by window when called standalone

 //Window.myFun();// here we call thru window this auromatically happens when we call without window this occur implicitly

 /**
  * Example 3- "this" inside of the function in strict mode 
    using strict mode will not allow the called standalone function will not call with object automatically
  */

"use strict";
function myFunction(){
    
    console.log(this);
}

myFunction();// undefined
Window.myFunction;//window

/**
 * Example 4 this inside of the methods of the object
 */

const myObject = {
    name: "abc",
    age: 10,
    harleen: this,
    greeting: function(){
        console.log(this);//{name:"abc",.... pura object}
        console.log("Name of the person is "+ this.name + "and age is "+ this.age);// use of this 

    },
    value: {
        harleen: this
    }
};
myObject.greeting(); // here this returns myObject as it is greeting is called using this or greeting is property of myObject

//greeting();//Uncaught ReferenceError: greeting is not defined eh window (global object di property nai hai) it is not part of globle

console.log(myObject.harleen);
console.log(myObject.value.harleen);

/**
 * this can be used in components of html also like on button , on button we can apply different methods using this , we can manuplate DOM elements 
 */

// String is immutable 
 const myString = new String("abc");
 console.log(myString);
 console.log(myString[0]);
 myString[0] = "c";
 console.log(myString);

 const myArray =[1,3,4];
 myArray[0] = 2;
 console.log(myArray);






