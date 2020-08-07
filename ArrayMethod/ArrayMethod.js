/**
 * forEach()- Use forEach instead of for loop for accessing elements in array
 */

// const myArray = [1, true, "abc"];

// // traditional way to access elements - this is prone to errors 
// for (let i = 0; i < myArray.length; i++) { // here take care to start i with 0 , i <= nai karna and i ++ di jga i+ nai likhna
//     console.log(myArray[i]);
// }

// // console.log(i); //Uncaught ReferenceError: i is not defined as i is declared as let temporary variable 

// // using foreach() - for callback function it better to use arrow function instead of creating other function than passing it as callback
// myArray.forEach(element => console.log(element + 1)); // now this is easy to read 
// myArray.forEach(el=> {el = el + 1;} );
// console.log(myArray);

// console.log(myArray.forEach(element => console.log(element))); // undefined

// //console.log(element); //Uncaught ReferenceError: element is not defined as element variable is created in arrow function only not accessable outside that function

/**
 * map()
 * 
 */

// const myNumbers = [3, 4, 5, 2];
//  

// // using map with external function
// const squareNumbers = element => {
//     element * element;
// }
// let mySquareNumbers2 = myNumbers.map(squareNumbers);
// console.log(mySquareNumbers2);

// // using map with index also 

// const squareNumbers = (element, index) => {
//     console.log(
//         "Element at the index " + index + " is " + element
//     );
//     return element * element;
// }
// let mySquareNumbers3 = myNumbers.map(squareNumbers);
// console.log(mySquareNumbers3);


// // map with math.pow()

// let mySquareNumbers4 = myNumbers.map(
//     element => Math.pow(element, 2)
//     );
// console.log(mySquareNumbers4);

// // map with direct call to Math.pow()
// // "index" in Math.pow will be treated as exponent value

// let mySquareNumbers5 = myNumbers.map(Math.pow); // here we called call back function by name only koi argument nai ditta it will automatically take 3 arguments 1st element , 2nd index , 3rd initail automatically and here 1st two are used by Math.pow
// console.log(mySquareNumbers5); 


/**
 * filter()
 * 
 */

// const myNumbers = [10, 25, 56, 100, 5];

// const filteredNumbers = myNumbers.filter(num => num >= 10);

// console.log(filteredNumbers);
// console.log(myNumbers);

/**
 * find()
 * 
 */

//  const myArray = [19, [], {}, "avx", true, 15];

//  const result = myArray.find(el => typeof el === "string");

//  console.log(result);

//  // andar di gal what is happening
//  const result1 = myArray.find(
//      element => {
//          console.log(element); // ek ek kar ke saare show hon ge till boolean
//          return typeof element === "boolean";
//      }
//  )

//  console.log(result1);

/**
 * every() and some()
 */
 
//  // EXAMPLE 1 - if all elements of array are positive then true else false

//  const myArray = [1, -2, 3, 5];

//  const isPositiveNumber = el => typeof el === "number" && el >= 0;
 
//  const allPositiveCheck = myArray.every(isPositiveNumber);
//  console.log(allPositiveCheck);

//  const somePositiveCheck = myArray.some(isPositiveNumber);
//  console.log(somePositiveCheck);

//  //EXAMPLE 2 OBJECTS

//  const items = [
//      {
//          title: "Computer",
//          quantity: 20
//      },
//      {
//          title: "Phone",
//          quantity: 3
//      },
//      {
//          title: "Headphones",
//          quantity: 15
//      }
//  ]

//  // all items have quantity > 5

// if (items.every(item => item.quantity > 5 ))
//   console.log("all items are available");

// // all items have quantity > 0 and some items have quantity <= 5

// if (
//     items.every(item => item.quantity > 0 ) &&
//     items.some(items => items.quantity <= 5)      
// )
//   console.log("some items are available");

// // some items have quantity 0

// if (items.some(item => item.quantity === 0 ))
//   console.log("some items are sold");

/**
 * includes()
*/

const myArray = [10, "abc", true, undefined, null, [1, 2], {}];
console.log(true, myArray.includes(true)); // false
console.log(10, myArray.includes(10)); // false
console.log("abc", myArray.includes("abc")); // false

console.log(
    "abc",
    "starting from index 3",
    myArray.includes("abc", 2)
);// false

console.log("null", myArray.includes(null)); // true
console.log(undefined, myArray.includes(undefined)); // 

console.log("[1, 2]", myArray.includes([1, 2]));// reference type
console.log("{}", myArray.includes({}));// reference type







