interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Phoebe',
  fullTimeEmployee: false,
  lastName: 'Roberts',
  location: 'Abuja',
  contract: false,
};

const director1: Directors = {
  firstName: 'Iliya',
  lastName: 'Ishaya',
  location: 'Abuja',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


console.log(teacher3);

// Create a new interface Directors that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}
// print teacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('Iliya', 'Ishaya'));

// creating  student constructor interface
interface StudentConstructor {
  firstName: string,
   lastName: string
}
// creating the student interface
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}
// writing  a class
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

   constructor({ firstName, lastName }: StudentConstructor) {
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

