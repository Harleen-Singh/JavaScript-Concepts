// Pre-ES6 - Template Strings

const myNumber = 10; //"10"
const myStr = "Hello"; // Hello
const myArr = [1,2];//"1,2"
const myObj = {x: 10};//"[object Object]"
const myBool = true;// "true"
const myGreeting = name => "Hello " + name; //Hello Harleen 

const templateStr = "Number \n is " + myNumber + " and string is " + myStr + " and array is " + myArr + " and object is " + myObj + " and boolean is " + myBool + " and result of the function call is "+ myGreeting("Harleen"); 
// here everything is converted into string called coersion
console.log(templateStr);

// use \n to change line we cannot simply change line as normally as pressing enter in above

/**
 *  ES6 - Tempate literals using puri string vali cheez ``synatax and jo vi variable hai us nu curly braces ch {} te usto pehla dollar sign 
 * Template literals does not introduced anything new it is just the sytactic sugar for Template sring it does not introduce anything new
 * 
 *  */

 const templateLiteral = `Number 
 is ${myNumber} and string is ${myStr} and array is ${myArr} and object is ${myObj} and boolean is ${myBool} and \n result of the function call is ${myGreeting("Harleen")} and function call with IIFE also ${(name => "Hello " + name)("Singh")} and result of ternary operator is ${myBool ? 15 : "World"}`; /// ethe koi vi expression use kar sakde ha
 // to separate template literal in different lines simply press enter
 
 console.log(templateLiteral);// same cheez ai jo pehla si
 
 const btn1 = "Button 1";
 const btn2 = "Button 2";

 const myButtons = `
 <div>
    <button>${btn1}</button>
    <button>${btn2}</button>
 </div>
 `;

 document.body.innerHTML = myButtons;


 // 

 const name = "Sophia";
 const age = 20;

 console.log(`${name} is ${age} years old`);
 // here underthe hood in above `` we are passing template literal to javascript engine and first it evaluate ${} vali expresion and then result of each expression is coirsed to string and then Js engine concatinate that string and result is returned
 // under the hood there is default tag function that processes each literal and returns string
 // we can create custom tag function

 const checkAge = (arrayOfStrings, name, age ) => {
     console.log(arrayOfStrings, name, age);
     return age >= 18 ? `${name} is adult` : `${name} is underage`;
 };
  
 console.log(checkAge`${name} is ${age} years \n old ${2+2}`);

  



