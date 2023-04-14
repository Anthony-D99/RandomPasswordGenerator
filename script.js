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




var includeUpperCaseLetters = prompt("Would you like to include upper case letters in your password?")
var includeLowerCaseLetters = prompt("Would you like to include lower case letters in your password?")
var includeSpecialCharacters = prompt("Would you like to include special characters in your password?")
var includeNumbers = prompt("Would you like to include numbers in your password?")
var numberOptions = ["1","2","3","4","5","6","7","8","9","0"]
var upperCaseOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
var lowerCaseOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
var specialCharacterOptions = ["]","[","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~","'",'"']
