 /**
  * Example 1
  * 
  * Each function in JS (not arrow function)
  * has .prototype property and can be used as constructor function
  * 
  * Prototype chain
  * CivilPlane.prototype -> Object.prototype -> null
  */
function CivilPlane () {
     console.log(CivilPlane.prototype); //{constructor: ƒ}

 }  // it is convention to start name of constructor function with capital letter to make it different from other function
console.log(CivilPlane.prototype.constructor === CivilPlane); // true
console.log(CivilPlane.prototype.__proto__ === Object.prototype)// true 
console.log(CivilPlane);
console.dir(CivilPlane);

 /**
  * Example 2
  * 
  * What is happening under the hood
  * Create new instance of the protoype
  * using "new" syntax:
  * 1 Function constructor is called
  * 2 New object {} is created 
  * 3 __proto_ is added 
  * 4 New props are added (optional)
  * 5 Object is returned by constructor function
  */
 
 

function CivilPlane1(props) {
    console.log(this);// CivilPlane1 {__proto__:...}
    console.log(this.__proto__);// CivilPlane.prototype
    this.numberOfSeats = props.numberOfSeats;
    console.log(this); // CivilPlane1 {numberOfSeats: 4, __proto__: ...}
}

const propsForSmallPlane = {
    numberOfSeats: 4

};

const smallPlane = new CivilPlane1(propsForSmallPlane);

console.log(smallPlane);

// here in smallPlane __proto__ is equal to CivilPlane1.prototype
console.log(smallPlane.__proto__ === CivilPlane.prototype);// true


/**
 * Example 3 - To add methods to prototype of constructor function
 * 
 * DON'T DO THIS!
 * Method "seatsInfo" will be added to every instance of prototype
 * But we want to add method as property of prototype
 */

function CivilPlane2(props) {
    this.numberOfSeats = props.numberOfSeats;
    this.seatsInfo = function() {
        console.log(
            "Number of seats in the plane is " + this.numberOfSeats 
        );
    };
}

const propsForSmallPlane1 = {
    numberOfSeats: 4
};

const smallPlane1 = new CivilPlane2(propsForSmallPlane1);

const propsForLargePlane = {
    numberOfSeats: 250
}

const largePlane = new CivilPlane2(propsForLargePlane);

console.log(largePlane.__proto__ === CivilPlane2.prototype) // true


/**
 * EXAMPLE 4
 * 
 * to solve problem of first case
 * 
 * Correct- method is added to the prototype
 * 
 * sidda constructor function de prototype vich paa do method nu
 */

function CivilPlane3(props) {
    this.numberOfSeats = props.numberOfSeats;
}

CivilPlane3.prototype.seatsInfo = function() {
    console.log(
        "Number of seats in the plane is " + this.numberOfSeats  // here this is smallPlane2 or largePlane acc to kis naal call kar rhe ha
    );
};

CivilPlane3.prototype.modifySeatsNumber = function(newSeatsQty) {
    this.numberOfSeats = newSeatsQty;
} // eh vala function jis object naal call hou us nu eh this point karu

const propsForSmallPlane2 = {
    numberOfSeats: 4
};

const smallPlane2 = new CivilPlane3(propsForSmallPlane2);

const propsForLargePlane1 = {
    numberOfSeats: 250
}

const largePlane1 = new CivilPlane3(propsForLargePlane1);

console.log(largePlane.__proto__ === CivilPlane3.prototype) // true

smallPlane2.seatsInfo();//4
smallPlane2.modifySeatsNumber(10); // modifies property of "smallPlane2"
smallPlane2.seatsInfo();//10

/**
 * Inabove eg using arrow function to add prototype
 * Don't use arrow function here - arrow function da aa
 * Use regular function only
 */

 CivilPlane3.prototype.seatsInfo1 = () => { 
     console.log(this); // window
     console.log(
         `Number of seats in the plane is ${this.numberOfSeats}` // undefiend aye ga
     );
 }


// here we can change any property directly also
smallPlane2.numberOfSeats = 5;
console.log(smallPlane2.numberOfSeats); // 5

/**
 * Object.create()
 */

 const Parent = {
     type: "Parent",
     typeInfo: function() {
         console.log(
             `Hello from  ${this.type}`
         );
     },
     modifyType: function(newType) { // function to change type
         this.type = newType;

     }
 }

 console.log(Parent.type); // "Parent"
 Parent.typeInfo(); // "hello from Parent"

 console.log(Parent);

 const child = Object.create(Parent);

 console.log(child); // in __proto__.Object we get type as "Parent" means this __proto__ points towards parent Object, jo vi saaman Parent ch hai oh sab child de proto vich aa jau

 console.log(child.__proto__ === Parent); // true

 console.log(child.type); // Parent

 child.type = "child";
 console.log(child.type);// child - hun pehla aap di property check hou gi baad ch proto cho

 child.typeInfo(); // "Hello from child"

 child.modifyType("modifiedChild");

 console.log(child.type);// modifiedChild
 


 /**
  * Example 5
  * 
  * Prototype Chain
  * CivilPlane.prototype > Airplane.prototype > Object.prototype
  */
 function Airplane(props) {
     this.wingspan = props.wingspan;
     this.maxRangeOfFlight = props.maxRangeOfFlight;
 }
 Airplane.prototype.airplaneInfo = function() {
     console.log(`Wingspan of the airplane is ${this.wingspan} and maximal range of flight is ${this.maxRangeOfFlight}`)
 }



 function Civilplane(props) {
     Airplane.call(this,props);
     this.numberOfSeats = props.numberOfSeats;
 }

 Civilplane.prototype = Object.create(Airplane.prototype); //is naal sab udd gya us de prototype ch te nava aafya reassign ho gai prototype di value iss nal constructor property v udd gai

 Civilplane.prototype.constructor = Civilplane;  
 
 Civilplane.prototype.seatsInfo = function() {
     console.log(this);
     console.log(
         `Number of seats in the plane is ${this.numberOfSeats}`
     );
 }

 Civilplane.prototype.modifySeatsNumber = function(newSeatsQty) {
     this.numberOfSeats = newSeatsQty;

 };

 const propsForSmallplane = {
     numberOfSeats: 4
 }

 const smallplane = new Civilplane(propsForSmallplane);

 const propsForLargeplane = {
     numberOfSeats: 250,
     wingspan: 50,
     maxRangeOfFlight: 10
 };

 //const largeplane = new Civilplane(propsForLargeplane);

 


