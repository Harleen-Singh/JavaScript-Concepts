/**
 * Example 1
 * 
 * Empty Array
 */
const myArray = [];
console.log(myArray);

console.log("_____");
/**
 * Example 2
 * 
 * Add elements to Array
 */
const myArray1 = [];
myArray1[0] = "First Element";

console.log(myArray1);

myArray1[1] = "Second Element";

console.log(myArray1);

myArray1.push("Third Element");

console.log(myArray1);

console.log("______");
/**
 * Example 3
 * 
 * Modify Elements 
 */
const myArray2 = [3, true, "abc", {}];
console.log(myArray2);
myArray2[1] = "New Value for second element";
console.log(myArray2);

myArray2[0] = null;

console.log(myArray2);

// here myArray2[3] contains empty object to add properties in it 

myArray2[3].newProp = 10;

console.log(myArray2);

// to access perticular property of object that is present in array- it is same as we do for object
console.log(myArray2[3].newProp);// 10 (using dot notation)
console.log(myArray2[3]["newProp"]);// 10 (using bracket notation)


/**
 * Example 4
 * 
 * Square bracket notation
 */

 const myArray3 = [1, 2];

 console.log(myArray3[0]);
 //If prperty name in the object is numeric you can't use dot notation
 //console.log(myArray3.0);//Uncaught SyntaxError: missing ) after argument list

/**
 * Example 5
 * 
 * Delete elements 
 */
const myArray4 = [true, null, 1, 2, "abc"];

delete myArray4[2];

console.log(myArray4);// element with index 2 is "empty" 

console.log(myArray4);// undefined 

myArray4.pop();

console.log(myArray4);// [true, null, empty, 2]

myArray4.pop();

console.log(myArray4);// [true, null, empty]

myArray4.shift(); 

console.log(myArray4);

/**
 * Example 6
 * 
 * Compare arrays
 */
const myArray5 = [1, 2, 3];
const myArray6 = [1, 2, 3];

console.log(myArray5 == myArray6);// false
console.log(myArray5 === myArray6);// false

const copyOfMyArray5 = myArray5;// dono variable const hai te dono variable ch same address stored hai 

console.log(copyOfMyArray5 === myArray5);//true

// what if we actually want to compare elements of two different arrays 
// bellow method will work if order of elements are same in both 
console.log(myArray5.toString() === myArray6.toString());//true // toString is method of array which converts array to string
console.log(myArray5.toString());//"1,2,3"
