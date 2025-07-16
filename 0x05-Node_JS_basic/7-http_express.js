const express = require('express');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      let result = `Number of students: ${students.length}`;

      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      Object.keys(fields).forEach((field) => {
        result += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      });

      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  countStudents(databasePath)
    .then((studentData) => {
      res.send(`This is the list of our students\n${studentData}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
