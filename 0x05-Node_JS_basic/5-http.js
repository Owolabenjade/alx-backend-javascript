const http = require('http');
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
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;