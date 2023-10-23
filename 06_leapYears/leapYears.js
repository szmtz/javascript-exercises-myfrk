// const leapYears = function() {

// };

function leapYears(year) {
    if (
      (year % 4 === 0 && year % 100 !== 0) || // Divisible by 4 but not by 100
      (year % 400 === 0) // Divisible by 400
    ) {
      return true; // It's a leap year
    } else {
      return false; // It's not a leap year
    }
  }
  
//   // Example usage:
//   const year = 2024;
//   if (leapYears(year)) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   }
  



// Do not edit below this line
module.exports = leapYears;
