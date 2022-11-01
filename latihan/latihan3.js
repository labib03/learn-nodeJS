const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
  } else {
    res.end(`
        <h1>404 NOT FOUND</h1>
        <p>Sorry the page you search is not found</p>
        <a href="/">Back to Home</a>
        `);
  }
});

server.listen(5000);
