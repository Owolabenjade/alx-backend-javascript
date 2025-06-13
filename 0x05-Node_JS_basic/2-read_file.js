const fs = require('fs');

/**
 * Attempts to read the database file synchronously
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(dataPath, 'utf8');
    
    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // Remove the header line
    const students = lines.slice(1);
    
    if (students.length === 0) {
      console.log('Number of students: 0');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;