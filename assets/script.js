// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Function to get the password options selected by the user

function userSelected () {
  // error handling for amount of characters in password
  // confirmation for user choices through confirm method
  // if statement for the user choosing "no" throughout the selection
  // object to store all the user choices
  // return the object
}

// Need an array to randomize the elements selected from the user options
function randomSelected(randomizedArr) {
  // use math.floor to select random choice within the choice array
  // choose random characters in the array
  // return the random element
}


// Function to generate the password from user input
function generatePassword() {
  // create an empty variable to store the concatenated password
  // create an empty variable holding all possible password choices
  // create an empty variable to hold the chosen characters

  // error handling to see if the object with your choices exist or not

  // Conditional statements are needed to add if the user has chosen special characters into an array of possible characters and must push new random characters to chosen array
  if (condition) {
    
  }

  // iterate over the password length from the choice made (obj), selecting random indexes from the array of possible characters and puts them into a result variable
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }

  // combine the results and send them to the writePassword function to present on the page
}

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
