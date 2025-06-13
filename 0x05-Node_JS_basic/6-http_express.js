const express = require('express');

const app = express();
const port = 1245;

/**
 * Create a small HTTP server using Express
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;