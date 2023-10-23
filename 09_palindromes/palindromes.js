// const palindromes = function () {

// };

function palindromes(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
  
    // Check if the reversed string is the same as the original
    return str === reversedStr;
  }
  
//   // Example usage:
//   const testString1 = "racecar";
//   console.log(isPalindrome(testString1)); // Outputs: true
  
//   const testString2 = "hello";
//   console.log(isPalindrome(testString2)); // Outputs: false
  






// Do not edit below this line
module.exports = palindromes;
