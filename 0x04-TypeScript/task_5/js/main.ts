// Define MajorCredits interface with branding for nominal typing
interface MajorCredits {
  credits: number;
  brand: 'major';  // unique tag to differentiate MajorCredits
}

// Define MinorCredits interface with branding for nominal typing
interface MinorCredits {
  credits: number;
  brand: 'minor';  // unique tag to differentiate MinorCredits
}

// Function to sum two MajorCredits and return MajorCredits type
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',  // keep the brand consistent
  };
}

// Function to sum two MinorCredits and return MinorCredits type
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',  // keep the brand consistent
  };
}
// tying to see
// Example usage:

// const major1: MajorCredits = { credits: 10, brand: 'major' };
// const major2: MajorCredits = { credits: 15, brand: 'major' };
// const minor1: MinorCredits = { credits: 5, brand: 'minor' };
// const minor2: MinorCredits = { credits: 7, brand: 'minor' };

// const totalMajor = sumMajorCredits(major1, major2);
// const totalMinor = sumMinorCredits(minor1, minor2);

// console.log('Total Major Credits:', totalMajor.credits); // 25
// console.log('Total Minor Credits:', totalMinor.credits); // 12
