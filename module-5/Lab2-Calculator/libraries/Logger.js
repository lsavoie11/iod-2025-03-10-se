class Logger {
  log(message) {
    // You can enhance this to write to a file or external service if needed
    console.log(`[Logger]: ${message}`);
  }
}

module.exports = Logger;
