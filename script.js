// Define global veriables
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

let lowerOptions = "abcdefghijklmnopqrstuvwxyz";
let upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericOptions = "0123456789";
let specialOptions = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let optionsChoices = [];
let text = "";

// Prompts user for password criteria and generats the password
function generatePassword() {
  console.log("Generate the password")
  // Length Criteria
  let passLength = prompt("How many characters do you want in your password?");
  console.log(passLength);

  if (passLength > 7 && passLength < 129) {
    console.log(passLength);
  }
  else if (passLength < 8 || passLength > 128)
    if (passLength > 128) {
      alert("Password must not exceed 128 characters");
      generatePassword();
      return;
    }
    else if (passLength < 8) {
      alert("Password must be at least 8 characters long")
      generatePassword();
      return;
    }

  // Lowercase option
  let passLower = confirm("Do you want lower case characters included?")

  if (passLower == true) {
    console.log("Include lowecase: " + passLower);
    optionsChoices.push(lowerOptions);
  }
  else {
    console.log("Include lowecase: " + passLower);
  }

  // Uppercase option
  let passUpper = confirm("Do you want upper case characters included?")

  if (passUpper == true) {
    console.log("Include uppercase: " + passUpper);
    optionsChoices.push(upperOptions);
  }
  else {
    console.log("Include uppercase: " + passUpper);
  }

  // Numerical option
  let passNumeric = confirm("Do you want numbers to be included?")

  if (passNumeric == true) {
    console.log("Include numbers: " + passNumeric);
    optionsChoices.push(numericOptions);
  }
  else {
    console.log("Include numbers: " + passNumeric);
  }

  // Specical characters option
  let passSpecial = confirm("Do you want special characters included?")

  if (passSpecial == true) {
    console.log("Include special characters: " + passSpecial);
    optionsChoices.push(specialOptions);
  }
  else {
    console.log("Include special characters: " + passSpecial);
  }

  // For loop that generates each character for password
  for (let i = 0; i < passLength; i++) {
    let optionsArray = optionsChoices[Math.floor(Math.random() * optionsChoices.length)];
    let passSelection = optionsArray.charAt(Math.floor(Math.random() * optionsArray.length));
    text += passSelection;
  }
  console.log(text);
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = text;
}

// Button click to start generating new password
generateBtn.addEventListener("click", writePassword);

//Button click to copy the generated password
copyBtn.addEventListener("click", function () {
  console.log ("CopyButton Pressed");
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert("Password copied to clipboard.");
});