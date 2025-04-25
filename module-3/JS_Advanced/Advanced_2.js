function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

/*Exercise A
The order that the messages will be printed is #4, #3, #2, #1. 
This is because the message with no delay is printed first, while other 
messages are printed in the order of their delay time.*/

//Exercise B
const arrowMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

//Exercise C
let timeoutId = setTimeout(arrowMsg, 10000, "#5: Delayed by 10 seconds");
//Exercise D
clearTimeout(timeoutId);
