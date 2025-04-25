/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    // Declaration merging to add experienceTeachingJava attribute to Teacher interface
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    // Java class extending Subject
    export class Java extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher(): string {
        if (!this.getTeacher || this.getTeacher.experienceTeachingJava === undefined || this.getTeacher.experienceTeachingJava <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.getTeacher.firstName}`;
      }
    }
  }