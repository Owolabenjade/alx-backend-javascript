import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];
    
    readDatabase(database)
      .then((studentsByField) => {
        let output = 'This is the list of our students\n';
        
        const fields = Object.keys(studentsByField).sort((a, b) => 
          a.toLowerCase().localeCompare(b.toLowerCase())
        );
        
        fields.forEach((field) => {
          const names = studentsByField[field].join(', ');
          output += `Number of students in ${field}: ${studentsByField[field].length}. List: ${names}\n`;
        });
        
        response.status(200).send(output.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
  
  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    const database = process.argv[2];
    
    readDatabase(database)
      .then((studentsByField) => {
        if (studentsByField[major]) {
          const names = studentsByField[major].join(', ');
          response.status(200).send(`List: ${names}`);
        } else {
          response.status(200).send('List: ');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
