const express = require('express');
const fs = require('fs');

const app = express();
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
        output += 'Number of students: 0';
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
        output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`;
        if (field !== Object.keys(fields)[Object.keys(fields).length - 1]) {
          output += '\n';
        }
      });
      
      resolve(output);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
});

/**
 * Create a more complex HTTP server using Express
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  
  let responseText = 'This is the list of our students\n';
  
  try {
    const studentsInfo = await countStudents(databasePath);
    responseText += studentsInfo;
  } catch (error) {
    responseText += error.message;
  }
  
  res.send(responseText);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;