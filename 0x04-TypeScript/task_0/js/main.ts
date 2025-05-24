interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Phoebe',
  lastName: 'Roberts',
  age: 25,
  location: 'Abuja',
};

const student2: Student = {
  firstName: 'Rahman',
  lastName: 'Ademola',
  age: 23,
  location: 'Lagos',
};

// Add to students list
const studentsList: Student[] = [student1, student2];

// Render table
const table = document.createElement('table');
table.border = '1';

studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
