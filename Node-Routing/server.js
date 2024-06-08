const http = require("http");
const url = require("url");

// ? home/
// ? /about

const requestHandler = (request, response) => {
  console.log(request.url);
  //   pass the url
  const passUrl = url.parse(request.url, true);
  console.log(request.method);
  //   Home route
  if (passUrl.pathname === "/" && request) {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });
    response.end("Jai Swaminarayan");
  }
  //   about route
  else if (passUrl.pathname === "/about" && request) {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });
    response.end("Das na Das");
  } else {
    response.writeHead(404, {
      "Content-Type": "text/plain",
    });
    response.end("Not Found");
  }
};

const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
