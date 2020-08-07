// EXAMPLE 1

//console.log(sum(5,7)); // error TDZ

// const sum = (a, b) => a + b;
// console.log(sum(1, 2)); // 3

// EXAMPLE 2
// const post = {
//     title: "sample",
//     comment: 10,
//     share: true,
//     published: true,
//     postId: 5134
// }

// const processedPost = (post) => {
//     return {
//         title: post.title,
//         comments: post.comment,
//         popular: post.comment > 5 ? true : false
//     } // explicit return of object
// }

// const processedPost1 = (post) => ({
//     title: post.title,
//     comments: post.comments,
//     popular: post.comments > 5 ? true : false

// })// short way to return object

// const abc = processedPost(post); 

// Example 3 - to add something in window

(() => {
    function greet() {
        return "Hey whatsup";
    }
    console.log(this); // Window object 
    this.greet = greet;
    return this;
})();

(() => {
    this.greet = () => "hey whats up";
    //this.greet = greet;// added greet in global object
    return this;
})();

/**
 * 
 * Arrow with this 
 */

//Example 1
// const num ={
//     value: 200,
//     hey: this, // object lai this window he hai
//     info: function info() { // anomalous function vi same kamm karu 
//         console.log(this); // num object
//         return this.value; // 200
//     },
//     info2: () => {
//         console.log(this); //window
//         return this.value; // undefined
//     },
//     info3: () => {
//         console.log(this); 
//         return this.value; 
//     }
// };

// console.log(num.info());// 200
// console.log(num.info2());// undefined

// const newNum = {
//     value:17
// };

// console.log(num.info.call(newNum)); // newNum object and 17 if called with info.call(newNum) here we passed newNum object to info1 function

// console.log(num.info3.call(newNum)); // window and undefined means isda koi nai (sala fir anath reh gya)

// Example 3
const str = {
    value: "Delayed greeting",
    // this is lost in the callback function
    greet: function greet() {
        setTimeout(function() {
            console.log(this);
            console.log(this.value);// ethe this window he hai te uste koi value as property nai hai
        }, 1000)
    }
};

str.greet(); // undefined(function di return type nai hai) and undefined(call back di undefined)

// to solve this problem

// option 1 - using self

const str1 = {
    value: "Delayed greeting",
    hey: this, // window
    greet: function greet() {
        const self = this; // self apne object nu contain karda hai
        setTimeout(function() {           
            console.log(self); // str object
            console.log(self.value);// "Delayed greeting"
        }, 1000)
    }
};

// option 2 - using bind(this)

const str2 = {
    value: "Delayed greeting",
    greet: function greet() {
        setTimeout(function() {           
            console.log(this); // str object
            console.log(this.value);// "Delayed greeting"
        }.bind(this), 1000)
    }
};

// option 3 - using arrow function - defined by surrounding lexical scope(static scoping) matlab bahr vale function da this chakk lau

const str3 = {
    value: "Delayed greeting",
    greet: function greet() {
        setTimeout(() => {           
            console.log(this); // str object
            console.log(this.value);// "Delayed greeting"
        }, 1000)
    }
};


/**
 * Arguments in Functions- Arguments is default property of function (declared without arrow functions)
  when we pass arguments it get stored as object Arguments, no matter in function we added parameters or not
 */

// regular function declaration
 function sum()
 {
     console.log(arguments);
     console.log(typeof arguments);// object
     console.log(Array.isArray(arguments)); // false
     const argumentsArray = Array.from(arguments)
     console.log(argumentsArray);

 }
 sum(1, 2, 3, 4, 5);


 // arrow function expression - arrow function kol eh property nai hai for that use rest operator
//  const sum2 = () =>
//  {
//      console.log(arguments);
//      console.log(typeof arguments);
//      const argumentsArray = Array.from(arguments)
//      console.log(argumentsArray);

//  }//ArrowFunction.js:160 Uncaught ReferenceError: arguments is not defined


 //sum2(1, 2, 3, 4, 5);

 const sum3 = (...arguments) =>
 {
     console.log(arguments);
     console.log(typeof arguments);// object
     console.log(Array.isArray(arguments));// true
     const argumentsArray = Array.from(arguments)
     console.log(argumentsArray);

 }


 sum3(1, 2, 3, 4, 5);


 /**
  * Regular function instead of Arrow Function
  */

  // EXAMPLE 1 - Object literal
const num = {
    value: 100,
    // info:() => {
    //     console.log(this); // window
    //     return this.value;
    // }
    info: function() {
        console.log(this); // num object
        return this.value;
    }

};
num.info();

// Example 2 - function constructors - Arrow function banjh hai

function GroceryItem(title, kind) {
    this.title = title;
    this.kind = kind;

}

// // Uncaught TypeError: GroceryItem is not a constructor
// const GroceryItem= () => (title, kind) {
//     this.title = title;
//     this.kind = kind;

// };

GroceryItem.prototype.info = function() {
    return this.title + " is " + this.kind;
}


// this is window and function always return undefined is undefined
// GroceryItem.prototype.info = () => {
//     console.log(this);
//     return this.title + " is " + this.kind;
// }


const apple = new GroceryItem("Apple", "fruit");
console.log(apple);

const brocolli = new GroceryItem("Brocolli", "vagetable");
console.log(brocolli);

console.log(apple.info());
console.log(brocolli.info());

