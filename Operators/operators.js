/**
 * Section 1
 * 
 * Arithmetic Operators
 */
let a,b;
a=1;
b=2;

console.log(a + b);//3
console.log(a * b);//2
console.log(a / b);//0.5
console.log(a - b);//-5

a = "abc";
b = 5;

console.log(a + b);// abc5
console.log(a * b);// NaN
console.log(a / b);// NaN
console.log(a / b);// NaN
console.log(a - b);// NaN

a = "Hello";
b = "World";
console.log("____");
// String concatination
console.log(a + " " + b);


console.log("_____");
//Unary plus (+) it tries to convert operand to number, it does not change sign
//if converable it returns a number 
// nai ta it will return NaN
c = "1";
console.log(+c);//1
c= undefined;
console.log(+c);//NaN undefined cannot be converted 
c =false ;//0
console.log(Number(c));// Number() inbuild function that converts variable to number
c = true; //1
console.log(+c);
c= "a";// NaN
console.log(+c);// string with allphabhets cannot be converted to number
c = -5;
console.log(+c);//-5 it does not change sign as unary minus does

console.log("_____");
// unary minus - It act as negation and also converts variable to number
c = 5;
console.log(-c); // -5
c= "5";
console.log(-c);// -5
c= "abc";
console.log(-c);// NaN

console.log("______");
// ++ increment operator
let d = 5;
++d; // same as d = d + 1;
console.log(d); // 6
d++;
console.log(d); // 7

console.log(++d);// 8 pehla  add hoya then printed
console.log(d++);// 8 pehla print hoya then add
console.log(d);// 9

//Build-in "++" prefix  function FIRST increments value of the operand and second return value of operand 

//Build-in "++" postfix  function FIRST returns value of the operand and second increments value of operand 

console.log("______");
// -- Decrement
console.log(d--);// 9
console.log(d);// 8
console.log(--d);// 7 // same as d = d - 1;
console.log(d); // 7

console.log("********");
/**
 * Section 2
 * 
 * Comparison Operator - return boolean value either true or false
 */
 console.log("_______")
 //Comparison of numbers
a = 5;
b = 7;
c =5;

console.log(a < b);// true
console.log(a > b);// false

console.log(a <= c);// true
console.log(a >= c);// true

console.log("-______");
// String comparison - check from first letter 
let str1, str2;

str1= "abc";
str2= "bcd";

console.log(str1 > str2);// false
console.log(str1 < str2);// true

str2 = "abc";

console.log(str2 >= str1);// true

str2 = "ABC";

console.log(str2 > str1);//flase as upper case letters come first in ASCII values   

console.log("_____");
// Equality operators
// never use "==" and "=!"
let myString = "0";
let myNumber = 0;
let myBoolean = false;

// types of values may be different
console.log(myString == myNumber); // true reanson because of hidden conversion called coerced
// means it compares only values not type of values

console.log(myNumber == myBoolean);// again true 

console.log(myString == myBoolean);

// TYPE and Value are compared 
console.log(myNumber === myBoolean);//false 
console.log(myNumber === myString);// false
console.log(myString === myBoolean);// false

// How you should compare variables of different types 
 console.log(Number(myString) === myNumber);// true
 console.log(+myString === myNumber);// true

console.log(myString != myNumber);// false
console.log(myString !== myNumber);// true

console.log("_____");

console.log(null === undefined);//false 
console.log(null == undefined); // true 

console.log("______");

console.log(0 === "" === null === undefined === false);// true due to right to left associvity 

console.log("******");
/**
 * Section 3
 * 
 * logical operators
 */

// OR ||(Binary,infix) it trys to convert the operands to boolean then compare and return 
// gal eh hai ki , pehla 1st argument dekhya jau 
// if it is true ta ohi return ho jau 
// if it is false then agla te jau if las targument ta eda he pront ho jau nai ta je ek hor false hai te agge hor arguments hai ja next te jau add so on jado tak koi true nai anda ja last argument nai phunchde

// In short it returns first true value ja end ali je true na mille

 console.log(true || false); // true
 console.log(false || true); // false

 console.log(Boolean("abc"));
 console.log(Boolean(""));

console.log("abc"|| ""); // abc 
console.log("" || "abc"); // abc

console.log(""||"");//empty string both false 
console.log("" || 0 || null || undefined || NaN || false);//false andar ale sab false hai

let city;
const defaultCity = "New York";

let myCity = city || defaultCity;
console.log(city || defaultCity);
console.log(myCity);

console.log("_____");

let myOtherCity = city || console.log("fill in city  please") || defaultCity;// ethe city pehla undefine si ta next argument te gaye hun eh expression call hou gi te console te andar likhi cheez print ho gai te agge is console vali statement ne return ch undefine ditta which is false firr agee gaye ta true vali cheez ai ta oh console te chapp gai
console.log(myOtherCity);

console.log("____");

city = "Los Angeles";
myCity = city || defaultCity;
console.log(myCity);

console.log("____")
// AND operator &&
// eh and da logic v or vang he hai just difference is that ki true false da chakkar ulta hai
// true te agge jau and false te stop

console.log(true && false);// false
console.log(false && true);// false

// and returns first falsy statement
console.log("abc" && 10 && false && "" && "abcd"); // false te rukkk jau

console.log("abc" && 10 && NaN && "" && "abcd");//NaN as this false in boolean

console.log("abc" && 10 && "" && "" && "abcd");//"" as this is false in boolean 

// All operands are "Truthy"
console.log("abc" && 10 && true && 123 && "string");// String

console.log("_____");

// NOT operator
console.log(!"abc");//false
console.log(!""); //true 
console.log(!0); //true

let myVariable = undefined;
myVariable = undefined;
console.log(!myVariable);

myVariable = "harleen";
console.log(!myVariable);

// Quick truely/falsy check
myVariable = null;
console.log(!!myVariable);//false
myVariable = 10;
console.log(!!myVariable); // True

/**
 * Section 4
 * 
 * Operators Precedance
 */
console.log(2 + 4 * 10);// multiplication has highest priority
console.log((2+4)*10);// grouping operator () has highest priority

let a1;
a1 = 1;
a1 = a1 + 5; // assignment is one of the lowest precedence 

console.log(a); //6

// using same operator multiple times in one line then comes associavity in picture

/**
 * section 5
 * 
 * Operator Associativity
 */
let a2,b2;
b2 =3;

a2 = b2 = 5; // here right to left associativity occurs
console.log(a2,b2);

console.log(4 + 5 + 6); // 15
console.log(6 + 4 + 5); // 15 here associativty doesn.t matter but occur left to right

console.log(5 * 10 / 2); // 25 left to right
console.log(5 * 10 / 2 / 5); // 5

/**
 * Challenge
 * 
 */
  















