// CHALLENGE
//Create a function "waitingFn" with single parameter "timeInMs" and inside of the function create "while" loop and this loop should be running during "timeInMs"
// Hint : Date.now() - current time in ms since 1970 each  time on calling this function will give different value

function waitingFn(timeInMs){
    const futureTime = Date.now() + timeInMs;
    while(Date.now() <= futureTime){
        console.log("hello")
    }
}



waitingFn(3000);

console.log("Funciton call has just ended"); // this statement will wait until above written function is done in execution





