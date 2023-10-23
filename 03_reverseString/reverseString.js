// const reverseString = function() {

// };

function reverseString(input) {
    if (typeof input !== 'string') {
      return "Input is not a string.";
    }
  
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
  
    return reversed;
  }
  
//   // Example usage:
//   const originalString = "Hello, World!";
//   const reversed = reverseString(originalString);
//   console.log(reversed); // Outputs: "!dlroW ,olleH"
  



// Do not edit below this line
module.exports = reverseString;
