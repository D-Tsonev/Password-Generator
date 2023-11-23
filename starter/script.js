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


const passwordArrays = {
  specialCharacters: specialCharacters.slice(),
  numericCharacters: numericCharacters.slice(),
  lowerCasedCharacters: lowerCasedCharacters.slice(),
  upperCasedCharacters: upperCasedCharacters.slice(),
};



// console.log(Object.values(passwordOptions.specialCharacters))
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

function getPasswordOptions() {
  let passwordLength = getPasswordLength()
  let isLowerCase = confirm("Would you like your password to contain lowercase characters");
  let isUpperCase = confirm("Would you like your password to contain Uppercase characters");
  let isNumbers = confirm("Would you like your password to contain numbers");
  let isSpecialChar = confirm("Would you like your password to contain special characters" );

  const userChoice = [
    { key: 'passwordLength', value: passwordLength },
    { key: 'isLowerCase', value: isLowerCase },
    { key: 'isUpperCase', value: isUpperCase },
    { key: 'isNumbers', value: isNumbers },
    { key: 'isSpecialChar', value: isSpecialChar }
  ];
  return userChoice
  
}

const userChoices = getPasswordOptions();
console.log(userChoices)

const filteredChoices = userChoices.filter((userChoice) => userChoice.value);

console.log(filteredChoices);

// Function for getting a random element from an array

Array.prototype.getRandom = function(){
  return this[Math.floor(Math.random()*this.length)];
}

// const passwordOption = getPasswordOptions();
// console.log(passwordOption)
// console.log(passwordOption.isLowerCase)
// console.log(passwordOption.passwordLength)
// console.log(passwordArrays.specialCharacters.getRandom())


// console.log(Object.values(passwordArrays.specialCharacters.getRandom()))


// Function to generate password with user input




// function generatePassword() {
//   const passwordOption = getPasswordOptions();
//   let password = '';
//   console.log('password options ->',passwordOption)

//   for (let i = 0; i < passwordOption.passwordLength; i++) {
//     let tempPassword = '';
//     if (passwordOption.isLowerCase) {
//       tempPassword = passwordArrays.lowerCasedCharacters.getRandom();
//       console.log('temp password',tempPassword)
//       password+=tempPassword 

//       console.log('line 169, password',password)

//     } else if (passwordOption.isUpperCase) {
//       tempPassword = passwordArrays.upperCasedCharacters.getRandom();
//       console.log("temp password line 175",tempPassword)
//       password+=tempPassword 
//       console.log('line 177, password',password)

//     } else if (passwordOption.isNumbers) {
//       tempPassword = passwordArrays.numericCharacters.getRandom();
      

//     } else {
//       tempPassword = passwordArrays.specialCharacters.getRandom();
      

//     }

//     // password;
//     console.log('final pass',password)
//   }
//   console.log(password)
//   return password;
  
// }
// generatePassword()

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