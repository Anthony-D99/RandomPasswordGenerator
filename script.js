// Assignment Code
var generateButton = document.querySelector("#generate");
console.log(generateButton)
function generatePassword() {
  var numberOfCharacters = prompt("How many character would you like your password to contain?")
  var includeUpperCaseLetters = confirm("Would you like to include upper case letters in your password?")
  var includeLowerCaseLetters = confirm("Would you like to include lower case letters in your password?")
  var includeSpecialCharacters = confirm("Would you like to include special characters in your password?")
  var includeNumbers = confirm("Would you like to include numbers in your password?")
  // var passwordArray = []


  // ask user criteria of password
  // create empty array variable for storing password values
  // generate a random number
  // index option array to get random value
  // repeat generation based on user criteria 
  // use join method to combine password array variable
  // return joined password


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getRandomLetter() {
  var letters = ['a', 'b']
  return letters[getRandom(0, getRandomLetter.length)]
}
// Add event listener to generate button
generateButton.addEventListener("click", writePassword);




var numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacterOptions = ["]", "[", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~", "'", '"']
