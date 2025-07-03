<<<<<<< HEAD
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
=======
import readDatabase from '../utils.js';

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        // Get comparison function for case-insensitive sorting
        const cmpFn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroups).sort(cmpFn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';
        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
>>>>>>> 539a68b75d8cdeef7a395a48ae79fa11efc7e4fb
      });
  }
}

export default StudentsController;
