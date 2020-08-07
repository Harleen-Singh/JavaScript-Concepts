function outerFn(mult) {
    const a = 10; 
    function innerFn(b){
        return (a + b)*mult;
    }

    return innerFn;
}

const res1 = outerFn(2); // here returned function get sored in res1
console.log(res1(20)); // 60

const res2 = outerFn(3);
console.log(res2(20)); // 90 

// how inner function can access variables of outer function - by closers when innerFn is created it also created one property [[scopes]]  in which we have closers and u can see in closers variables of outerFn are present by which inner function is accessing those variables



