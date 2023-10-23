// const findTheOldest = function() {

// };

function findTheOldest(people) {
    const currentYear = new Date().getFullYear();
  
    const oldestPerson = people.reduce((oldest, person) => {
      const ageOldest = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
      const agePerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
      return ageOldest < agePerson ? person : oldest;
    });
  
    return oldestPerson;
  }
  
  // Example usage:
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];
  
  const oldest = findTheOldest(people);
  console.log(oldest.name); // Output: "Ray"
  















// Do not edit below this line
module.exports = findTheOldest;
