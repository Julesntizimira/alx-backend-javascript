const fs = require('fs');

function parseCSVLine(line) {
  const [firstName, lastName, age, field] = line.split(',');
  return {
    firstName, lastName, age: parseInt(age), field,
  };
}

function countStudents(filePath) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(filePath, 'utf8').split('\n').slice(1);

    // Parse CSV lines and filter out empty lines
    const students = data.filter((line) => line.trim() !== '').map(parseCSVLine);

    // Count total number of students
    console.log(`Number of students: ${students.length}`);

    // Group students by field
    const groupedStudents = students.reduce((groups, student) => {
      groups[student.field] = groups[student.field] || [];
      groups[student.field].push(`${student.firstName} ${student.lastName}`);
      return groups;
    }, {});

    // Output number of students in each field
    for (const [field, studentsList] of Object.entries(groupedStudents)) {
      console.log(`Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
