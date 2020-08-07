/**
 * EXAMPLE 1 -
 * 
 * Arrow Function and rest operator
 */

// // rest parameter without parenthesis
// const sumNumbers = ...nums => { //Uncaught SyntaxError: Unexpected token ...
//     console.log(nums);
// } 

// // rest parameter not at last
// const sumNumbers = (...nums, b, a) => { //Uncaught SyntaxError: Rest parameter must be last formal parameter
//         console.log(nums);
//     } 
    

// const sumNumbers = (...nums) => {
//     console.log(nums); // Array 
//     //console.log(arguments); // Uncaught ReferenceError: arguments is not defined
//     return nums
//     .filter(num => typeof num === "number") //try seeing result without filter 
//     .reduce((sum, num) => sum + num, 0); // using reduce method of array helper method
// }; 

// console.log(sumNumbers(1, 2, 3, 4)); // 10

// // what if I pass non number like string
// //console.log(sumNumbers("abc", 2, 3, 4)); // 0abc234 here in sum operator numbers are querst to string and added like a string to avoid this use filter method

// // with filter
// console.log(sumNumbers("abc", 2, 3, 4));

/**
 * EXAMPLE 2 
 * 
 * Traditional function
 */

// const c = 30; 

//  function sumNumbers() {
//     console.log(arguments);
//     return arguments[0]; // we can access all sent parameters in arguments variable of function
//  }

//  console.log(sumNumbers(10,15,c)); // sab othe arguments ch store ho jau ik hor cheez function call te sirf values jandi hai othe je parameter hai te uss de variable ch store hou nai ta arguments ch chale jau


/**
 * Example 3 - Spread Operator
 * 
 * Function call 
 */

//  const myGreeting = (name, city, age) => {
//      return `Hello from ${name} who is ${age} years old and lives in ${city}`;
//  };

//  const myPerson = ["Harleen", "Ludhiana", "19"];
//  console.log(myPerson);
//  console.log(myGreeting(...myPerson));
 
//  const anotherPerson = ["Ludhiana", "25"];
//  console.log(myGreeting(...anotherPerson)); // is naal pehle do variable assign ho gaye last 

//  console.log(myGreeting("harleens", ...anotherPerson)); // hybrid of normal variable and spread variable


 /**
  * Example 4 - 
  * 
  * concatenate arrays 
  */

//   const a = [1, 2, 3];
//   const b = [4, 5];

//   // using array helper methods 
//   const c = a.concat(b).concat(7); // iss nal a te b array mutate nai hon ge 
//   console.log(c);

//   // using spread operator
//   const d = [...a, ...b, 9];

/**
 * Example 5-
 * 
 * create date
 */

//  const dateInfo = [2025, 5, 10];

//  const date = new Date(...dateInfo);
//  console.log(date);

 /**
  * EXAMPLE 6-
  * 
  * Copy one array to other
  * 
  * vaise ta array reference type hai when we simply copy a array it copes pointer
  * in just copy as assignment operator will pass pointer variable 
  * here we do elements as shallow copy
  * 
  * this method copy only one level deep
  */

// const myArray = ["Hello", 5, [], true];

// const newArray = [...myArray]; 

// newArray.push("harleen"); // myArray is not mutated 
// console.log(newArray);
// console.log(myArray); // unchanged

// // doing copy like this is not true copy but it is shallow copy
// // How ?
// // eh sirf ek level te he copy hoi hai MATLAB?
// // try to access object or array which is created inside that array will give change in both copy and origanal kyoki ik level dia cheeza he copy hoi hai at second level address copy hoya

// newArray[2].push(false);
// // u will see false in both arrays
// console.log(myArray); // myArray is mutated
// console.log(newArray);

/**
 * EXAMPLE 7 -
 * 
 * Copy of object (ES 2018)
 * 
 * This copy is also shallow copy same as Example 6
 */

// const myObject = {a: 10, b: "c", d: [1, 2]};

// const copiedObject = { ...myObject};
// copiedObject.a = 20;

// console.log(copiedObject);
// console.log(myObject);// not mutated

// copiedObject.d.pop();
// console.log(copiedObject);
// console.log(myObject);// mutated

/**
 * EXAMPLE 8 
 * 
 * Spread String
 */

 const myStr = "Hello World";
 console.log(myStr);

 // spread operator will always spread string in single characters
 const letters = [...myStr];
 console.log(letters);


// where as in old method of spreading ie spit can separate in words also
 const oldStyleLetters = myStr.split("");
 console.log(oldStyleLetters); 
 const oldStyleLetters1 = myStr.split(" ");
 console.log(oldStyleLetters1);