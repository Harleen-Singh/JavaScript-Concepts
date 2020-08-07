/**
Where to use CONST?
*/
// Example 1
function multiplier(a) {
    const MULT = 10;
    return a * MULT;
}

console.log(multiplier(3));
console.log(multiplier(5));

// Example 2 (Execute in node.js)
//const path = require ("path"); // used in node.js to export external modules that are bundled with node.js
// path module is imported to path variable and we not want to reassign this path variable 
// these types of declaration is done is starting of code
//console.log(path.resolve);

// Example 3
const sum = function(a, b) {
    return a + b;
}

// sum = 5; Uncaught TypeError: Assignment to constant variable
 


/**
Where to use LET
 */
// Example 1
 for (let i = 0; i < 5; i++) {// here i is used inside loop only therefore use let as limited to block scope
    console.log(i);
}

// Example 2
function shortStr(str) {
    const MAX_LENGTH = 10;// AS 10 IS USED MULTIPLE TIMES
    if (str.length > MAX_LENGTH) {
        let newStr;// newStr is req here only
        newStr = str.substring(0, MAX_LENGTH) + "...";
        console.log(newStr);
    } else {
        console.log(str);
    }
}

shortStr("long string example");
shortStr("Short");

/**
 * Where to use VAR?
 */
// Example 1
var person = {
    name: "Bob",
    age: 25
}

function updatePerson(person) {
    var updatedPerson = {};

    if (person.name) {
        updatedPerson.name = person.name;
    }
    updatedPerson.updatedAt = new Date();

    return updatedPerson;
}

console.log(updatePerson(person));