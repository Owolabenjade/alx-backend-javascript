/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    // Declaration merging to add experienceTeachingC attribute to Teacher interface
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    // Cpp class extending Subject
    export class Cpp extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      getAvailableTeacher(): string {
        if (!this.getTeacher || this.getTeacher.experienceTeachingC === undefined || this.getTeacher.experienceTeachingC <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.getTeacher.firstName}`;
      }
    }
  }