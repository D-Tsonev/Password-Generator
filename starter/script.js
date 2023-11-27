// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Created an object that stores all possible variances of password characters

const passwordArrays = {
  isSpecialChar: specialCharacters.slice(),
  isNumbers: numericCharacters.slice(),
  isLowerCase: lowerCasedCharacters.slice(),
  isUpperCase: upperCasedCharacters.slice(),
};



// Function to prompt user for password options 

// function that checks if the length of the password is between 8 and 128 and if the entered value is a number
function getPasswordLength() {

let passwordLength = parseInt(prompt("Choose a length of password - between 8 and 128 characters"));

  if  (isNaN(passwordLength)  ||  (passwordLength < 8 ||  passwordLength > 128)) {
    alert ("Please enter a valid number between 8 and 128")
    return getPasswordLength()
  }
  else {
  return passwordLength;
}}


// const passwordLength = getPasswordLength()

// function that prompt the user what to include as characters in the password.

function getPasswordOptions() {
  // let passwordLength = getPasswordLength()
  let isLowerCase = confirm("Would you like your password to contain lowercase characters");
  let isUpperCase = confirm("Would you like your password to contain Uppercase characters");
  let isNumbers = confirm("Would you like your password to contain numbers");
  let isSpecialChar = confirm("Would you like your password to contain special characters" );


  const userOptions = [
    // { key: 'passwordLength', value: passwordLength },
    { key: 'isLowerCase', value: isLowerCase },
    { key: 'isUpperCase', value: isUpperCase },
    { key: 'isNumbers', value: isNumbers },
    { key: 'isSpecialChar', value: isSpecialChar }
  ];
  return userOptions
  
}


// Function for getting a random element from an array

Array.prototype.getRandom = function(){
  return this[Math.floor(Math.random()*this.length)];
}


function generatePassword() {
  const passwordLength = getPasswordLength()
  const userOptions = getPasswordOptions();
  const filteredChoices = userOptions.filter((userOption) => userOption.value);


  // console.log('selected options by the user',filteredChoices);

// Arrays with selected character sets
  const selectedCharSets = filteredChoices.map((choice) => passwordArrays[choice.key]);
  // console.log('selected char sets',selectedCharSets)


// merged the results to one array that contains all selected by the user chars that can be include in the password
  const merged = selectedCharSets.flat(1)
  // console.log(merged)

  
  let password=''
for (let i = 0; i < passwordLength; i++) {
  const chars = merged.getRandom();

  password += chars;
}
  console.log('password',password)
  return password

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);