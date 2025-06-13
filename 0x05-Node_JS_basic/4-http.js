const http = require('http');

const hostname = 'localhost';
const port = 1245;

/**
 * Create a small HTTP server using the http module
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ALX!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;