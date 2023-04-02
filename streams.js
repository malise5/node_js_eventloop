//streams are used to process (read and write ) data piece  by piece (chunks)
//without completing the whole read or write operation,
// and therefore without keeping all the data in memory

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // ..solution1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  //   //   ..solution 2
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });

  //Solution 3 pipe
  const readable = fs.createReadStream("text-file.txt");
  readable.pipe(res);
});

server.listen(8000, () => {
  console.log("Waiting for a request on port 8000");
});
