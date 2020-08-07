// Object literal
let myObject = {
    prop1: 1,
    prop2: "String",
    prop3: function() {
        console.log(this.prop1, this.prop2)
    }
};

// Enhanced Object literals

// EXAMPLE 1 - shorthand property names
const num = 10;
const str = "hello world";
const bool = true;

const myObject1 = {
    num,
    str,
    bool
   // missingVar //Uncaught ReferenceError: missingVar is not defined
};

// EXAMPLE 2 - shorthand method names
const myCar = (make, year) => {
    return {
        make, // short hand property name
        year,
        info: (price) => { // shorthand method name
            return `${make} costs ${price}$`
        }
    }
};

const newCar = myCar("tesla", 2020);
console.log(newCar.info(50000));

// EXAMPLE 3 -computed property name

const BG_COLOR_PROP = "bgColor";
const btn = {
    title: "Button 1",
    [BG_COLOR_PROP]: "blue"
};

const list = {
    options: ["Option1", "Option 2"],
    [BG_COLOR_PROP]: "grey"
};

console.log(btn);
console.log(list);



