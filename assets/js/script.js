// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJLMNOPQRSTUVXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var spChar = "~`!@#$%^&*()-_+={}[]|\;:<>,./?'";
var password = "";

var passwordCriteria = alert("Please select the properties for your desired password");
var passwordLenght = prompt("Enter the lenght of your passwor (8-128 characters)");
parseInt(passwordLenght); //convert to integer
validateLengthInput(); //validate input from prompt
var lowCaCon = confirm("lower case characters");
var uppCaCon = confirm("UPPER CASE CHARACTERS");
var numCon = confirm("numeric characters");
var spChCon = confirm("Special characters");
var charPool = "";
if (uppCaCon) charPool += upperCase; // checks confirmation and adds to pool of characters for random
if (lowCaCon) charPool += lowerCase;
if (numCon) charPool += numeric;
if (spChCon) charPool += spChar;

var generatePassword = "";
randomgen(); //calls the randomgen function according to the confirmed parameters
writePassword();

function validateLengthInput() {
  if (isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    preventDefault();

  }
  return true;
  
}




function randomgen() {
  for (var i=0; i<passwordLenght; i++){
  var randomIndex = Math.floor(Math.random()* charPool.length);
  generatePassword += charPool.charAt(randomIndex);
  console.log(generatePassword);
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
