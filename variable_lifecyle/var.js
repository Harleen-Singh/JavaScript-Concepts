/**
 * var
 */

 // scope
var a = 10 ;
console.log(a);

function fn() {
    var b = true;// b is here limited to scope of this function scope
    console.log(b);
}

fn();

//console.log(b);// Uncaught ReferenceError: b is not defined

{
    var b1 = 1;
}

console.log(b1);// 1

for(var j = 0; j < 5; j++){
    console.log(j);
}

console.log(j);

//Reassignment
var c = 1;
c = 2;

function fn2(){
    c = 3;// andar reassign ho sakda hai
}

fn2();
console.log(c);

// Redeclaration
var d = false;
var d = true;

function fn3(){
    var d = 5;// eda scope function ch he semit hai 
    console.log(d);// 5
}

console.log(d);// true

// Hoisting
e = 5;
var e;

function fn4(){
    console.log(f);// undefined
    var f;
    f=10;

}
fn4();






