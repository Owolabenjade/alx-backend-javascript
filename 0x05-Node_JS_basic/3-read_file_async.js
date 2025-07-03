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
      
      console.log(`Number of students: ${students.length}`);
      
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

module.exports = countStudents;
