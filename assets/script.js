// Arrays for special characters, lowercase letters, uppercase letters, and numbers


// Function to get the password options selected by the user

// Need an array to randomize the elements selected from the user options

// Function to generate the password from user input

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
