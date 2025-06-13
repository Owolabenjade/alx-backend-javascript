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
      }
      
      console.log(`Number of students: ${students.length}`);
      
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

module.exports = countStudents;