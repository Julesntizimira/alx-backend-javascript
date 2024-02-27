/* Reading a file synchronously with Node JS
*/
const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    let data = fs.readFileSync(path, 'utf8');
    data = data.split('\n');
    const lineCount = data.length - 1;
    console.log(`Number of students: ${lineCount}`);
    let fields = [];
    for (const line of data) {
      if (line !== '\n') fields.push(line.split(',')[0]);
    }
    fields = fields.slice(1).join(', ');
    console.log(`Number of students in FIELD: 6. List: ${fields}`);
  } catch (err) {
    throw new error('Cannot load the database');
  }
}
module.exports = countStudents;
