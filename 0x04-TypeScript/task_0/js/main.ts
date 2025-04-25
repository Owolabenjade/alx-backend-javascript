/**
 * Student interface
 */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
  };
  
  // Create an array containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Render table function
  function renderTable(students: Student[]): void {
    // Create table element
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    
    // Create header row
    const headerRow = document.createElement('tr');
    const firstNameHeader = document.createElement('th');
    const locationHeader = document.createElement('th');
    
    firstNameHeader.textContent = 'First Name';
    locationHeader.textContent = 'Location';
    
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tableBody.appendChild(headerRow);
    
    // Create a row for each student
    students.forEach((student) => {
      const row = document.createElement('tr');
      
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tableBody.appendChild(row);
    });
    
    // Append tableBody to table
    table.appendChild(tableBody);
    
    // Append table to the body of the document
    document.body.appendChild(table);
  }
  
  // Call the renderTable function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    renderTable(studentsList);
  });