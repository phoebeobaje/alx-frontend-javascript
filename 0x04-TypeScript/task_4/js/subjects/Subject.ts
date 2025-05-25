namespace Subjects {
  export class Subject {
    protected teacher!: Teacher; // teacher attribute of type Teacher

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
