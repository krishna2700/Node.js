// ! 1. Import the required modules
const http = require("http");
console.log(http);

// ! 2. Define the handler
const requestHandler = (request, response) => {
  console.log(request);
  console.log(response);
  // * send response
  response.writeHead(200, {
    "Content-Type": "text/plain",
  });
  response.end("Jai swaminarayan das na das");
};

// ! 3. Create the server
const server = http.createServer(requestHandler);

// ! 4. Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
