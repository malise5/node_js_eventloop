const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// ..observers
myEmitter.on("newSale", () => {
  console.log("tHERE WAS A NEW sale!");
});

// ..observers
myEmitter.on("newSale", () => {
  console.log("Customer name: JOnas");
});

// ..object that emits the events
myEmitter.emit("newSale");
