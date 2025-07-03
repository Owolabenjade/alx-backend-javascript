import fs from 'fs';

<<<<<<< HEAD
const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      const studentsByField = {};
      
      for (let i = 1; i < lines.length; i++) {
        const fields = lines[i].split(',');
        if (fields.length === 4) {
          const firstname = fields[0];
          const field = fields[3];
          
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      }
      
      resolve(studentsByField);
    });
  });
};
=======
/**
 * Reads the database asynchronously.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
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
        resolve({});
        return;
      }
      
      // Group students by field
      const fields = {};
      
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        
        if (!fields[field]) {
          fields[field] = [];
        }
        
        fields[field].push(firstname);
      });
      
      resolve(fields);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
});
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb

export default readDatabase;
