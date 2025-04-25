/**
 * Teacher interface
 */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow additional attributes
  }
  
  /**
   * Directors interface extending Teacher
   */
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  /**
   * Interface for printTeacher function
   */
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  /**
   * Returns the first letter of firstName and the full lastName
   * @param firstName - Teacher's first name
   * @param lastName - Teacher's last name
   * @returns formatted name (e.g., "J. Doe")
   */
  const printTeacher: printTeacherFunction = function(firstName, lastName) {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  /**
   * Interface for StudentClass constructor
   */
  interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
  }
  
  /**
   * Interface for StudentClass methods
   */
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  /**
   * StudentClass implementation
   */
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example of creating a teacher
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  // Should print:
  // Object
  // contract: false
  // firstName: "John"
  // fullTimeEmployee: false
  // lastName: "Doe"
  // location: "London"
  
  // Example of creating a director
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Should print:
  // Object
  // firstName: "John"
  // fullTimeEmployee: true
  // lastName: "Doe"
  // location: "London"
  // numberOfReports: 17
  
  // Test printTeacher function
  console.log(printTeacher("John", "Doe")); // Should print: J. Doe
  
  // Test StudentClass
  const student1 = new StudentClass("Alice", "Johnson");
  console.log(student1.workOnHomework()); // Should print: Currently working
  console.log(student1.displayName()); // Should print: Alice