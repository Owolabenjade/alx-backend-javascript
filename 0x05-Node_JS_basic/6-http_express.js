const express = require('express');

const app = express();
<<<<<<< HEAD

=======
const port = 1245;

/**
 * Create a small HTTP server using Express
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb
app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

<<<<<<< HEAD
app.listen(1245);
=======
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb

module.exports = app;
