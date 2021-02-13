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
    txt = `Do you want lower case characters? (yes or no)`
    lower = prompt(txt, `yes`)
    lower = lower.toLowerCase()
    console.log(lower)
    if (lower === 'yes') {
        charset += `abcdefghijklmnopqrstuvwxyz`
    } else{
      charset = charset
    }
    return charset
}

function uppercase(charset) {
  txt = `Do you want upper case characters? (yes or no)`
  upper = prompt(txt, `yes`)
  upper = upper.toLowerCase()
  console.log(upper)
  if (upper == 'yes') {
    charset += `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  } else{
    charset = charset
  }
  return charset
}

function numbers(charset) {
  txt = `Do you want numbers? (yes or no)`
  numberino = prompt(txt, `yes`)
  numberino = numberino.toLowerCase()
  if (numberino == 'yes') {
    charset += `0123456789`
  } else{
    charset = charset
  }
  return charset
}

function symboll(charset) {
  txt = `Do you want symbols? (yes or no)`
  symbolino = prompt(txt, `yes`) 
  symbolino = symbolino.toLowerCase()
  if (symbolino == 'yes') {
    charset += `!@#$%^&*`
  } else{
    charset = charset
  }
  return charset
}