interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 21, location: 'Calfornia' };
const student2: Student = { firstName: 'Jane', lastName: 'Mary', age: 25, location: 'Nairobi' };

const studentsList: Array<Student> = [student1, student2];

export function studentInterface(studentsList: Array<Student>) {
    const table = document.createElement('table')
    const header = table.insertRow()
    header.insertCell().textContent = 'First Name'
    header.insertCell().textContent = 'Location'
    header.cells[0].style.fontWeight = header.cells[1].style.fontWeight = 'bold';
  
    studentsList.forEach(student => {
        const row = table.insertRow()
        row.insertCell().textContent = student.firstName
        row.insertCell().textContent = student.location
    })
    document.body.appendChild(table);
  }
  studentInterface(studentsList);