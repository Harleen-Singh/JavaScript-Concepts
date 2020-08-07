/**
 * Example 1
 * 
 * Class declaration and instance of the class
 */

//  class MyClass {

//  }

//  const firstInstance = new MyClass();

//  console.log(firstInstance);

//  console.log(firstInstance.__proto__ === MyClass.prototype); // true

//  console.log(MyClass.prototype.constructor === MyClass); // true

//  console.log(MyClass.prototype.__proto__=== Object.prototype); // true

 /**
  * EXAMPLE 2
  * 
  * Hoisting (not hoisted)
  * Class can be accessed only after its declaration in the code
  */
  
  //const firstInstance = new MyClass();//Uncaught SyntaxError: MyClass is not declared 

//   class MyClass {}

  /**
   * EXAMPLE 3 
   * 
   * Class Expression 
   * kisi variable nu v assign kar sakde ha class
   * ehte Hoising da scene same hai depends on variable keda hai let , const or var
   */
// console.log(MyClass); //Cannot access 'MyClass' before initialization
// console.log(MyClass1); // undefined 

// const MyClass = class {};
// var MyClass1 = class {};
// const firstInstance = new MyClass();

// console.log(firstInstance);

// console.log(firstInstance.__proto__ === MyClass.prototype);// true 

/**
 * EXAMPLE 4
 * 
 * Constructor method in the class
 */
// class ComputerMouse {
//     constructor(props) {
//         this.type = props.type;
//         this.color = props.color;
//         this.interface = props.interface;
//     }
// }

// const propsForWirelessMouse = {
//     type: "Wireless",
//     color: "white",
//     interface: "Bluetooth"
// };

// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// console.log(wirelessMouse);

/**
 * EXAMPLE 5
 * 
 * Class is NOT object literal and its methods are not shorthand method names
 */

// INCORRECT SYNTAX
// class ComputerMouse {
//     title: "My Title", // ncaught SyntaxError: Unexpected identifier
//     constructor: function(props) {//Uncaught SyntaxError: Unexpected identifier
//         this.type = props.type;
//         this.color = props.color;
//         this.interface = props.interface;
//     }
// } 

// CORRECT SYNTAX- class kol apne synax hai na ke object valeeee......

// class ComputerMouse {
//     constructor() {}  // bina comma's to
//     method1() {}
//     method2(props) {}
// }

/**
 * EXAMPLE 6
 * 
 * Default values for properties - kai var apa puri properties nal object nai bjede uss nal remaining properties are assigned as undefined ta kuj default hona chaida
 * OPTION 1
   Use operator for this (par ede naal default show hou je bheji hoi cheez falsy hai) kai vaar je false ja empty string bheji hai us nu v to v eh default vali show kar du 
 * OPTION 2 
   For strict check use ternary operator
 */

//  class ComputerMouse {
//     constructor(props) {
//         this.type = props.type || "Computer";
//         this.color = props.color;
//         this.interface = props.interface !== undefined ? props.interface : "Not specified";
//     }
// }

// const propsForWirelessMouse = {
//     type: "Wireless",
//     color: "white",
//     interface: "Bluetooth"
// };

// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// const propsForGenericMouse = {
//     color: "red"
// }

// const genericMouse = new ComputerMouse(propsForGenericMouse);

// console.log(genericMouse);

/**
 * EXAMPLE 7 
 * 
 * Class methods
 */

 class ComputerMouse {
    constructor(props) {
        this.type = props.type;
        this.color = props.color;
        this.interface = props.interface;
    }

    mouseInfo(){
        console.log(this)
        console.log(`Type of mouse is ${this.type} and color is ${this.color}`);
    }

    // , // COMMA not allowed

    changeMouseType(newType) {
        this.type = newType;
    }
}

const propsForWirelessMouse = {
    type: "Wireless",
    color: "white",
    interface: "Bluetooth"
};

const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

console.log(wirelessMouse);

wirelessMouse.mouseInfo(); // Type of mouse is Wireless and color is white

wirelessMouse.changeMouseType("USB"); // Type of mouse is Wireless and color is white  (this updates the object)

/**
 * EXAMPLE 7 
 * 
 * Class extension (add new class to the prototype chain)
 */


//  class ComputerAccessories {
//      constructor(props) {
//          this.compatibility = props.compatibility || ["PC", "Mac"];
//      }
//  }

//  //class ComputerMouse extends ComputerAccessories {}// constructor of the ComputerAccessories will be called automatically without super under the hood

//  // Default behaviour if constructor is absent andar di gall
//  class ComputerMouse extends ComputerAccessories {
//      constructor(...allProps) { // rest operator
//          console.log(allProps);
//          super(...allProps); // spread operator
//      }
//  }



//  myMouse = new ComputerMouse({
//      compatibility: ["mac"]
//  });

//  console.log(myMouse);


/**
 * EXAMPLE 8 
 * 
 * Set properties in different classes 
 */


//   class ComputerAccessories {
//      constructor(props) {
//          this.compatibility = props.compatibility || ["PC", "Mac"]; // compatability eda constructor set karu
//      }
//  }

//  // when super is not called

// //  class ComputerMouse extends ComputerAccessories {
// //      constructor(props){ //Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new ComputerMouse
// //          this.type = props.type; 
// //      }
// //  } 

// // when super is called without argument

// //  class ComputerMouse extends ComputerAccessories {
// //      constructor(props){//Uncaught TypeError: Cannot read property 'compatibility' of undefined
// //      at new ComputerAccessories (classes.js:207)
// //      at new ComputerMouse (classes.js:219)
// //          super();
// //          this.type = props.type; 
// //      }
// //  } 

//  class ComputerMouse extends ComputerAccessories {
//     constructor(props){
//         super(props);
//         this.type = props.type; // type eda constructor set karu 
//     }
// } 





//  myMouse = new ComputerMouse({
//      compatibility: ["mac"],
//      type: "optical"
//  });

//  console.log(myMouse);


/**
 * EXAMPLE 9
 * 
 * Adding methods to classes
 */
//   class ComputerAccessories {
//      constructor(props) {
//          this.compatibility = props.compatibility || ["PC", "Mac"]; // compatability eda constructor set karu
//      }

//      compatibilityInfo() {
//          this.compatibility.forEach(el => console.log(`Accessory is compatible with ${el}`));
//             }
//  }


//  class ComputerMouse extends ComputerAccessories {
//     constructor(props){
//         super(props);
//         this.type = props.type; // type eda constructor set karu 
//     }

//     mouseInfo() {
//         console.log(`Type of the mouse is ${this.type}`);
//     }
// } 





//  myMouse = new ComputerMouse({
//      compatibility: ["mac"],
//      type: "optical"
//  });

//  console.log(myMouse);

//  myMouse.compatibilityInfo();

// myMouse.mouseInfo();

// myMouse.mouseInfo();

/**
 * EXAMPLE 10
 * 
 * typeof and instanceof in classes 
 * 
 */

// class ComputerAccessories {
//     constructor(props) {
//         this.compatibility = props.compatibility || ["PC", "Mac"]; // compatability eda constructor set karu
//     }

//     compatibilityInfo() {
//         this.compatibility.forEach(el => console.log(`Accessory is compatible with ${el}`));
//            }
// }


// class ComputerMouse extends ComputerAccessories {
//    constructor(props){
//        super(props);
//        this.type = props.type; // type eda constructor set karu 
//    }

//    mouseInfo() {
//        console.log(`Type of the mouse is ${this.type}`);
//    }
// } 

// myMouse = new ComputerMouse({
//     compatibility: ["mac"],
//     type: "optical"
// });

// console.log(myMouse);

// myMouse.compatibilityInfo();

// myMouse.mouseInfo();

// myMouse.mouseInfo();

// console.log(typeof ComputerMouse); // function

// console.log(myMouse instanceof ComputerMouse); // true

// console.log(myMouse instanceof ComputerAccessories); // true

// console.log(myMouse instanceof Object); // true

// console.log(typeof ComputerMouse.prototype); // object

// console.log(typeof ComputerMouse.prototype.constructor); // Function

// console.log(ComputerMouse.prototype.constructor === ComputerMouse); // true

/**
 * EXAMPLE 11 
 * 
 * STATIC METHODS
 * Static methods are called directly by using class name , with object it gives error 
   Reason - jo method static kar ke bnaya hai oh us class(funciton)(object) de prototype di jga us di own property bann jadna (means uss class da he method bann jada) 
 * Rest all the methods are called using object created by that class
 */

// class ComputerMouse {
//     constructor(props) {
//         this.type = props.type;
//     }

//     static ownClassMethod() {
//         console.log("This class sets props for the Mouses");
//     }

//     mouseInfo() {
//         console.log(`Type of the mouse ${this.type}`);
//     }
// }

// const myMouse = new ComputerMouse({type: "Gaming"});

// console.log(myMouse);

// myMouse.mouseInfo(); // Type of the mouse is Gaming

// //myMouse.onClassMethod(); //Uncaught TypeError: myMouse.onClassMethod is not a function

// ComputerMouse.ownClassMethod(); // this class sets props for the Mouses

// console.dir(ComputerMouse); // check presence of ownClassMethod

