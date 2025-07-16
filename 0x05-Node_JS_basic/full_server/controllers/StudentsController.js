import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(request, response) {
    const databasePath = process.argv[2];
    
    readDatabase(databasePath)
      .then(fields => {
        let responseText = 'This is the list of our students\n';
        
        // Sort fields alphabetically (case insensitive)
        const sortedFields = Object.keys(fields).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase())
        );
        
        sortedFields.forEach(field => {
          responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });
        
        response.status(200).send(responseText.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
  
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    const databasePath = process.argv[2];
    
    readDatabase(databasePath)
      .then(fields => {
        const students = fields[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;