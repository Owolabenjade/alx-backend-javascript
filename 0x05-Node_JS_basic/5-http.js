const http = require('http');
<<<<<<< HEAD
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
=======
const fs = require('fs');
const url = require('url');

const hostname = 'localhost';
const port = 1245;

/**
 * Attempts to read the database file asynchronously
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    
    try {
      // Split the data into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      
      // Remove the header line
      const students = lines.slice(1);
      
      let output = '';
      
      if (students.length === 0) {
        output += 'Number of students: 0\n';
        resolve(output);
        return;
      }
      
      output += `Number of students: ${students.length}\n`;
      
      // Group students by field
      const fields = {};
      
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        
        if (!fields[field]) {
          fields[field] = [];
        }
        
        fields[field].push(firstname);
      });
      
      // Display students by field
      Object.keys(fields).forEach((field) => {
        const studentList = fields[field];
        output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      });
      
      resolve(output);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
});

/**
 * Create a more complex HTTP server using the http module
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (pathname === '/') {
    res.end('Hello ALX!');
  } else if (pathname === '/students') {
    const databasePath = process.argv[2];
    
    let responseText = 'This is the list of our students\n';
    
    try {
      const studentsInfo = await countStudents(databasePath);
      responseText += studentsInfo.trim();
    } catch (error) {
      responseText += error.message;
    }
    
    res.end(responseText);
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

<<<<<<< HEAD
app.listen(1245);
=======
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb

module.exports = app;
