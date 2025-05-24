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

console.log(teacher3);
