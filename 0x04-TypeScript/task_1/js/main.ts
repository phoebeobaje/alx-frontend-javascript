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
