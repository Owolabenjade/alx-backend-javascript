const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      
      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
      }
      
      const students = [];
      for (let i = 1; i < lines.length; i++) {
        const fields = lines[i].split(',');
        if (fields.length === 4) {
          students.push({
            firstname: fields[0],
            lastname: fields[1],
            age: fields[2],
            field: fields[3]
          });
        }
      }
      
      let result = `Number of students: ${students.length}\n`;
      
      const fieldGroups = {};
      students.forEach((student) => {
        if (!fieldGroups[student.field]) {
          fieldGroups[student.field] = [];
        }
        fieldGroups[student.field].push(student.firstname);
      });
      
      for (const field in fieldGroups) {
        const names = fieldGroups[field].join(', ');
        result += `Number of students in ${field}: ${fieldGroups[field].length}. List: ${names}\n`;
      }
      
      return result.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const database = process.argv[2];
    countStudents(database)
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
