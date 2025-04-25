/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    // Declaration merging to add experienceTeachingReact attribute to Teacher interface
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    // React class extending Subject
    export class React extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      getAvailableTeacher(): string {
        if (!this.getTeacher || this.getTeacher.experienceTeachingReact === undefined || this.getTeacher.experienceTeachingReact <= 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.getTeacher.firstName}`;
      }
    }
  }