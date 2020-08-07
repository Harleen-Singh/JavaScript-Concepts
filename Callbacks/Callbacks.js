// callbacks, events, events queue, execution contexts stack and Web APIs
function waitingFn(timeInMs) {
    const futureTime = Date.now() + timeInMs;
    while (futureTime > Date.now()) {
        /// waiting 
    }
}

//waitingFn(5000);
// what will happen on changing order of waitingFn and setTimeOut()
// we didn't get callback is executed in 2 seconds instead we get last statement in the global scope 
// why as when we first call callback it is sent to web API now we get back to global execution window where waiting funciton is called and in b/w call back comes back in queue par usto pehla he hor v function paye hai like console.log val doosra setTimeOut ena sab to baad he callback challu ga

setTimeout(() => console.log("1st callback is executed"),5000);

waitingFn(5000);


setTimeout(() => console.log("2nd callback is  executed"),0);

console.log("Last statement in the global scope"); 

console.log (" hello ")

/**
 * Challange
 * 
 * Run this code and click the button multiple times during first 5 seconds 
 * Interpret result obtained
 */
// Why message "callback is executed" is always the last one after "aaa vaji " even if button is clicked after first 2 seconds?
// NOTE- ek doosra setTimeOut v hai jisda time 0 ms hai oh v last te hoya 
// kyo ?
// ans- Because of priority 
// hun priority vich jo saaman UI ch hai onu jada priority mille gi ki user wait na kare is lai callback vali di last ch hai priority
// hun ethe ta sirf text print si but in real life it can be download or next page or any menu like thing 