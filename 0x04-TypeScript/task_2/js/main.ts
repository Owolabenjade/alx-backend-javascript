/**
 * DirectorInterface with the required methods
 */
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  /**
   * TeacherInterface with the required methods
   */
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  /**
   * Director class implementing DirectorInterface
   */
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  /**
   * Teacher class implementing TeacherInterface
   */
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  /**
   * Function to create an employee based on salary
   * @param salary - The salary as a number or string
   * @returns Teacher or Director instance
   */
  function createEmployee(salary: number | string): Teacher | Director {
    // If salary is a number and less than 500, return a Teacher
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    
    // Otherwise return a Director
    return new Director();
  }
  
  /**
   * Type predicate function to check if an employee is a Director
   * @param employee - The employee to check
   * @returns True if the employee is a Director, false otherwise
   */
  function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  /**
   * Function to execute work based on the employee type
   * @param employee - The employee to execute work for
   * @returns The result of the work task
   */
  function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }
  }
  
  /**
   * String literal type for subjects
   */
  type Subjects = 'Math' | 'History';
  
  /**
   * Function to teach a class based on the subject
   * @param todayClass - The subject to teach (Math or History)
   * @returns A string indicating what is being taught
   */
  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    } else if (todayClass === 'History') {
      return 'Teaching History';
    } else {
      // This should never be reached due to TypeScript checking,
      // but is added for completeness
      return 'Invalid subject';
    }
  }
  
  // Test cases for createEmployee
  console.log(createEmployee(200));
  // Should print: Teacher
  
  console.log(createEmployee(1000));
  // Should print: Director
  
  console.log(createEmployee('$500'));
  // Should print: Director
  
  // Test cases for executeWork
  console.log(executeWork(createEmployee(200)));
  // Should print: Getting to work
  
  console.log(executeWork(createEmployee(1000)));
  // Should print: Getting to director tasks
  
  // Test cases for teachClass
  console.log(teachClass('Math'));
  // Should print: Teaching Math
  
  console.log(teachClass('History'));
  // Should print: Teaching History