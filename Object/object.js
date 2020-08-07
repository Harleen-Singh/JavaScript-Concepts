/**
 * Eg 1 create object and modify its property
 */

 let myObject;
 myObject={
     a:1,
     b:"abc"
 };
 console.log(myObject);

 myObject.a=20;
 console.log(myObject);

myObject.c = true;
console.log(myObject)

delete myObject.b;
console.log(myObject)

console.log(myObject.a)

/**
 * Challenge 1
 * 
 * Create variable called "myPost"
 * Initial value should be {}
 * Add property called "postTitle" and value "Object is reference type"
 * add one more property "postLikes" with value 0
 * Add third property "shared" and set its value to "false"
 * Increase value of the "postLikes" by 1 
 * Delete property "shared"
 */

let myPost;
myPost = {};
myPost.postTitle = "Object is reference type";
myPost.postLikes = 0;
myPost.shared = false;
console.log(myPost);
myPost.postLikes=+1;
console.log(myPost);
delete myPost.shared;
console.log(myPost);

/**
 * Example 2
 * 
 * Use "const" for object declaeation
 */

 const myobject = {}; 
 myobject.a = true;

 console.log(myobject);

 //myobject = {
 //    a : true 
// }; //Uncaught TypeError: Assignment to constant variable.

/**
 * Challenge 2
 * 
 * Create variable "myObject1" add property "a" with value 10
 * create another variable "copyOfMyObject" and its value should be myObject
 * Add new property "b" with value false to the "copyOfMyObject"
 * Print to the console "myObject1" and "copyOfMyObject" and interpret results
 * 
 */

let myObject1 ={
    a:10
}
let copyOfMyObject=myObject1;
copyOfMyObject.b= false;

console.log(myObject1);
console.log(copyOfMyObject);

/**
 * Example 3
 * 
 * Bracket notation
 */
let myObject2 ={
    a: true,
    b: null,
    c: 25
};

//console.log(myObject2[a]);//Uncaught ReferenceError: a is not defined
console.log(myObject2["a"]);
console.log(myObject2["b"]);

const propertyName = "c";
console.log(myObject2[propertyName]);
console.log(myObject["propertyName"]);//undefined

myObject2["new"+ "Property" + "Name"] = "value";
console.log(myObject2);

/**
 * Example 3
 * 
 * Missing properties
 */

 const myObject3 = {
     a:3,
     b:true
 };
// Code execution not stopped
 console.log(myObject3.c);// undefined 

 // code execution is Stopped
// console.log(nondeclaredvariable);//Uncaught ReferenceError: nondeclaredvariable is not defined

myObject3.newPropertyWithUndefinedValue =undefined;
console.log(myObject3.newPropertyWithUndefinedValue);//undefined

//Never manually assign "undefined" as a value of any variable or property of the object.
//REASON as in above case now it is undefferentiable that property exist or not

/**
 * Challenge 3
 * 
 * Create object "objectWithNestedObject"with initial value {}
 * Add property "nestedObject" with initial value{}
 * Add property "a" with value "null" to "nestedObject". Use dot notation
 * Add property "b" with value "true" to "nestedObject". use bracket notation. create new variable with property name.
 * 
 */

 let objectWithNestedObject={};
 objectWithNestedObject.nestedObject ={};
 objectWithNestedObject.nestedObject.a= null;

 const newPropertyName = 'b';
 objectWithNestedObject.nestedObject[newPropertyName]= true;
 console.log(objectWithNestedObject);




