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
      });
  }
}

export default StudentsController;
