const http = require('http');

<<<<<<< HEAD
=======
const hostname = 'localhost';
const port = 1245;

/**
 * Create a small HTTP server using the http module
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ALX!');
});

<<<<<<< HEAD
app.listen(1245);
=======
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb

module.exports = app;
