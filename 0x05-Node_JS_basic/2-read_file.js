/* Reading a file synchronously with Node JS
*/
const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    let data = fs.readFileSync(path, 'utf8');
    data = data.split('\n').slice(1);
    const lineCount = data.length;
    console.log(`Number of students: ${lineCount}`);
    const swe = [];
    const cs = [];
    for (const line of data) {
      if (line !== '\n') {
        const lineSplited = line.split(',');
        if (lineSplited[3] === 'SWE') swe.push(lineSplited[0]);
        else if (lineSplited[3] === 'CS') cs.push(lineSplited[0]);
      }
    }
    const fields = [{ name: 'CS', data: cs }, { name: 'SWE', data: swe }];
    for (const field of fields) {
      console.log(`Number of students in ${field.name}: ${field.data.length}. List: ${field.data.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
