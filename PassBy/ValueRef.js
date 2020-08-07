// PASS BY VALUE
// If variable that holds value of primitive value type is passed to the function as argument, it's value can't be changed inside of the function
function myFunction(parameterA) {
    parameterA =20;
    return parameterA;
}

const a = 10;
// here we pass variable a as value only thats why variable a not changed
console.log(myFunction(a)); // 20

console.log(a); // 10

// PASS BY REFERENCE
const myArray = [1, 2, 3];

function myFunction1(arr) {
    console.log(arr === myArray); // true
    arr.push(4);
    console.log(arry);
    return arr;
}

myFunction(myArray);
// both arr and myArray contains same pointer which points to same array
console.log(myArray);

// CHALLANGE
// Create a function that will add custom method to the global object "window"

// Method 1-
function addCustomGlobalMethod(obj) {
    this.customMethod = obj.customMethod;

}

const obj = {
    customMethod: function(){
        console.log("Greeting from the custom method");
    }
}

addCustomGlobalMethod(obj);

customMethod();

// Method 2

function addCustomGlobalMethod1(globalObject) {
    console.log(this === globalObject); // true
    globalObject.customMethod1 = function() {
        console.log("Greetings from the custom method");
    };
}

addCustomGlobalMethod1(this); // ethe this varible global execution ch window nu point karda hai and we passed window object only 
// is naal window ch customMethod1 aaa gya here we mutated global object window

let myString1 = new String("abcde");

console.log(myString1);

myString1[0] = "f";
console.log(myString1);

// Method 3
// here above we created one function then on call adding object 
// to avoid this long proccess we can use IIFE that will elimenate proccess of creation and calling of function


// OPTION 1 - NAMED IIFE
(function addCustomGlobalMethod1(globalObject) {
    console.log(this === globalObject); // true
    globalObject.customMethod1 = function() {
        console.log("Greetings from the custom method");
    };
})(this);

//OPTION 1.1 - ANONYMOUS IIFE
(function (globalObject) {
    console.log(this === globalObject); // true
    globalObject.customMethod2 = function() {
        console.log("Greetings from the custom method");
    };
})(this);



// OPTION 2 - IIFE WITH MORE SHORT CODE
(function () {
    this.customMethod3 = function() {
        console.log("hi");
    };
})();

//OPTION 3 -IIFE ARROW FUNCTION 
(() => {
 this.customMethod4 = function() {
        this.console.log("hello");

    };
}
)();

// NOTE: THIS APPROACH OF IIFE IS NOW NO LONGER POPULAR AS WE HAVE MODULES WHERE WE CAN STORE FUNCTIONS AND IMPORT MODULES 