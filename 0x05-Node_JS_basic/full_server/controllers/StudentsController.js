const fields = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    fields(process.argv[2])
      .then((data) => {
        response.statusCode = 200;
        const result = ['This is the list of our students'];
        Object.keys(data).sort().forEach((key) => {
          result.push(`Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
        });
        response.end(result.join('\n'));
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.statusCode = 500;
      response.end('Major parameter must be CS or SWE');
    }
    fields(process.argv[2])
      .then((data) => {
        response.statusCode = 200;
        const result = `List: ${data[major].join(', ')}`;
        response.end(result);
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error.message);
      });
  }
}
module.exports = StudentsController;
