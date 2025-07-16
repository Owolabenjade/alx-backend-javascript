const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then(data => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1);
      
      let result = `Number of students: ${students.length}\n`;
      
      const fields = {};
      students.forEach(student => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      
      Object.keys(fields).forEach(field => {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });
      
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
    const databasePath = process.argv[2];
    
    countStudents(databasePath)
      .then(studentData => {
        res.end(studentData);
      })
      .catch(error => {
        res.end(error.message);
      });
  } else {
    res.end('Hello ALX!');
  }
});

app.listen(1245);

module.exports = app;