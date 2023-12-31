const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return; // Add return to stop further execution
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return; // Add return to stop further execution
  }
  res.end(`
    <h1>Opps!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

server.listen(5000);
