const express = require('express');
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

const app = express();

=======
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
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb
app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

<<<<<<< HEAD
app.get('/students', (req, res) => {
  const database = process.argv[2];
  countStudents(database)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(1245);
=======
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
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb

module.exports = app;
