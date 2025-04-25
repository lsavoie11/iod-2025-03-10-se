//Exercise A
function randomDelay() {
  const delay = Math.floor(Math.random() * 20) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Exercise B
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay * 1000);
  });
}
// Exercise C & D
randomDelay()
  .then((delay) => {
    console.log(`Success! Delay was ${delay} seconds.`);
  })
  .catch((delay) => {
    console.log(`Failure! Delay was ${delay} seconds.`);
  });
