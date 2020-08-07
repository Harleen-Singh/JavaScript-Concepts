/**
 * let
 */

 // scope
 let a = 10 ;
 console.log(a);
 
 function fn() {
     let b = true;// b is here limited to scope of this function scope
     console.log(b);
 }
 
 fn();
 
 //console.log(b);// Uncaught ReferenceError: b is not defined

{
    let b1 = 1;
}

//console.log(b1);//Uncaught ReferenceError: b1 is not defined

for(let j = 0; j < 5; j++){
    console.log(j);
}

//console.log(j); Uncaught ReferenceError: j is not defined
 
 //Reassignment
 let c = 1;
 c = 2;
 
 function fn2(){
     c = 3;// andar reassign ho sakda hai
 }
 
 fn2();
 console.log(c);
 
 // Redeclaration
 let d = false;
 //let d = true;//Uncaught SyntaxError: Identifier 'd' has already been declared
 
 function fn3(){
     let d = 5;// eda scope function ch he semit hai 
     console.log(d);// 5
 }
 
 console.log(d);// false
 
 // Hoisting
 let e;
 e = 5;
 //let e;//Uncaught ReferenceError: Cannot access 'e' before initialization

 function fn4(){
     //console.log(f);//Uncaught ReferenceError: Cannot access 'f' before initialization
     let f;
     f=10;

 }
 fn4();