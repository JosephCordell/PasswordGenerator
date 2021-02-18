// Assignment Code
var generateBtn = document.querySelector("#generate");

var length;
var charset = ""
txt = `How long would you like your password? (8-128 characters)`

// Write password to the #password input
function writePassword() {
  charset = ``
  length = createLength(length);
  charset = lowercase(charset)
  charset = uppercase(charset)
  charset = numbers(charset)
  charset = symboll(charset)
  console.log(`you made it!! ${charset}`)
  var password = generatePassword(length, charset);
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(length, charset) {
  var retVal = "";

  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function createLength(newLength) {
  newLength = prompt(txt, `8`);
  if (newLength < 8 || newLength > 128) {
    txt = `Try again, you must choose between 8 and 128.`
    createLength(newLength)
  }
    return newLength
}

function lowercase(charset) {
    if (confirm(`Do you want lower case characters?`)){
      charset += `abcdefghijklmnopqrstuvwxyz`
    } 
    return charset
}

function uppercase(charset) {
  if (confirm(`Do you want upper case characters?`)){
    charset += `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  } 
  return charset
}

function numbers(charset) {
  if (confirm(`Do you want numbers?`)){
    charset += `0123456789`
  } 
  return charset
}

function symboll(charset) {
  if (confirm(`Do you want symbols?`)){
    charset += `!@#$%^&*`
  } 
  return charset
}