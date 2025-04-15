export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    const departments = Object.keys(allEmployees);
    
    return {
      *[Symbol.iterator]() {
        for (const department of departments) {
          const employees = allEmployees[department];
          for (const employee of employees) {
            yield employee;
          }
        }
      }
    };
  }