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
=======
const fs = require('fs');

/**
 * Attempts to read the database file asynchronously
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
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
      
      if (students.length === 0) {
        console.log('Number of students: 0');
        resolve();
        return;
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb
      }
      
      console.log(`Number of students: ${students.length}`);
      
<<<<<<< HEAD
      const fieldGroups = {};
      students.forEach((student) => {
        if (!fieldGroups[student.field]) {
          fieldGroups[student.field] = [];
        }
        fieldGroups[student.field].push(student.firstname);
      });
      
      for (const field in fieldGroups) {
        const names = fieldGroups[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldGroups[field].length}. List: ${names}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
=======
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
        console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
      });
      
      resolve();
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
});
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb

module.exports = countStudents;
