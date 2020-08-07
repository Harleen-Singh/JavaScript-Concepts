const myConst = [];
myConst[0] = 20;
console.log(myConst)
//myConst = [1,2,3];//Uncaught TypeError: Assignment to constant variable.

const anotherConst = {};
anotherConst.a = 10;
//anotherConst = {
//    b:10;
//}

const primitiveTypeConst = null;
//primitiveTypeConst = 10;

var myString = new String("abc");
console.log(myString);
myString[2] = "c";
console.log(myString);


/**
 * const
 */

 // scope
 const a = 10 ;
 console.log(a);
 
 function fn() {
     const b = true;// b is here limited to scope of this function scope
     console.log(b);
 }
 
 fn();
 
 //console.log(b);// Uncaught ReferenceError: b is not defined

{
    const b1 = 1;
}

//console.log(b1);//Uncaught ReferenceError: b1 is not defined

for(let j = 0; j < 5; j++){ // ethe j change ho reha hai so cannot be const
    console.log(j);
}

//console.log(j); Uncaught ReferenceError: j is not defined
 
 //Reassignment - not possible
 const c = 1;
// c = 2;
 
 function fn2(){
     //c = 3;
 }
 
 fn2();
 console.log(c);
 
 // Redeclaration 
 const d = false;
 //const d = true;//Uncaught SyntaxError: Identifier 'd' has already been declared
 
 function fn3(){
     const d = 5;// eda scope function ch he semit hai 
     console.log(d);// 5
 }
 
 console.log(d);// false
 
 // Hoisting
 const e = 5;

 function fn4(){
     //console.log(f);//Uncaught ReferenceError: Cannot access 'f' before initialization
     const f = 10;

 }
 fn4();