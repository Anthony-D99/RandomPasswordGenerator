// Assignment Code
var generateButton = document.querySelector("#generate");
var numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacterOptions = ["]", "[", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~", "'", '"'];
var password = [];

function getRandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUpToMax = randomNumber * max
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);

}
function getRandomValueArray(array) {
  var randomArrayPosition = getRandomNumber(0, array.length);
  return array[randomArrayPosition];
}


function generatePassword() {
  
  var generatedPassword= "";

  var numberOfCharacters = prompt("How many character would you like your password to contain?");

  if(numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Password must be longer than 8 or less than 128 characters");
    return;
  }

  var includeUpperCaseLetters = confirm("Would you like to include upper case letters in your password?");

  if(includeUpperCaseLetters){
    password = password.concact(upperCaseOptions);
  }

  var includeLowerCaseLetters = confirm("Would you like to include lower case letters in your password?");

  if(includeLowerCaseLetters){
    password = password.concact(lowerCaseOptions);
  }

  var includeSpecialCharacters = confirm("Would you like to include special characters in your password?");

  if(includeSpecialCharacters){
    password = password.concact(specialCharacterOptions);
  }

  var includeNumbers = confirm("Would you like to include numbers in your password?");

  if(includeNumbers){
    password = password.concact(numberOptions);
  }
 
 for(i = 0; i < numberOfCharacters; i++){
  generatedPassword += getRandomValueArray(password);
 }

return generatedPassword;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);




