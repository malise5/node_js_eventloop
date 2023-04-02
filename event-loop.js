const { Console } = require("console");
const fs = require("fs");

setTimeout(() => {
  console.log("Timer 1 Finished");
}, 0);

setImmediate(() => console.log("Immidiate 1 Finished"));

fs.readFile("test-file.txt", "utf8", (err, data) => {
  console.log("I/O finished");
});

console.log("Hallo from the top level");
