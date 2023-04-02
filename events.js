const EventEmitter = require("events");
const http = require("http");

class Sale extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sale();

// ..observers
myEmitter.on("newSale", () => {
  console.log("tHERE WAS A NEW sale!");
});

// ..observers
myEmitter.on("newSale", () => {
  console.log("Customer name: JOnas");
});

// ..observers
myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} left in the stocks`);
});

// ..object that emits the events
myEmitter.emit("newSale", 9);

/* ========================================================*/

const server = http.createServer((req, res) => {});

server.on("request", (req, res) => {
  console.log("Request Received");
  req.end("Request received");
});

server.listen(6000, "127.0.0.1", () => {
  console.log("waiting for request on Port 6000");
});
