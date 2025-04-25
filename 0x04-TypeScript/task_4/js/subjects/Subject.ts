/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject {
      private teacher: Teacher;
  
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
  
      get getTeacher(): Teacher {
        return this.teacher;
      }
    }
  }