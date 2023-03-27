// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function to generate password
function generatePassword() {
  // Define character sets
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+-=[]{}|;':\",./<>?\\";
  
  // Initialize password variable
  var password = "";
  
  // Prompt user for password criteria
  var length = parseInt(prompt("How long would you like your password to be? (between 8 and 128 characters)"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return "";
  }
  
  var useLowercase = confirm("Would you like to use lowercase characters?");
  var useUppercase = confirm("Would you like to use uppercase characters?");
  var useNumbers = confirm("Would you like to use numbers?");
  var useSymbols = confirm("Would you like to use symbols?");
  
  // Check if at least one character set is selected
  if (!useLowercase && !useUppercase && !useNumbers && !useSymbols) {
    alert("You must select at least one character set.");
    return "";
  }
  
  // Generate password
  var availableChars = "";
  if (useLowercase) {
    availableChars += lowercase;
  }
  if (useUppercase) {
    availableChars += uppercase;
  }
  if (useNumbers) {
    availableChars += numbers;
  }
  if (useSymbols) {
    availableChars += symbols;
  }
  
  for (var i = 0; i < length; i++) {
    password += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
  }
  
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
