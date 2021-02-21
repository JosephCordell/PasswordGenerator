// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector("#length")
var lowerEl = document.querySelector("#lowercase")
var upperEl = document.querySelector("#uppercase")
var numbersEl = document.querySelector("#numbers")
var symbollEl = document.querySelector("#symbols")

var length;
var charset = ``;
var lower = true;
var upper = true;
var nummber = true;
var symmbol = true;

lowerEl.addEventListener('change', function(){
  if (this.checked){
    lower = true;
  } else {
    lower = false;
  }
})
upperEl.addEventListener('change', function(){
  if (this.checked){
    upper = true;
  } else {
    upper = false;
  }
})
numbersEl.addEventListener('change', function(){
  if (this.checked){
    nummber = true;
  } else {
    nummber = false;
  }
})
symbollEl.addEventListener('change', function(){
  if (this.checked){
    symmbol = true;
  } else {
    symmbol = false;
  }
})

function writePassword() {
  falsecheck()
  charset = ``
  length = +lengthEl.value
  lengthCheck(length);
  lowercase(lower);
  uppercase(upper);
  numbers(nummber);
  symboll(symmbol);
  var password = generatePassword(length, charset);
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

generateBtn.addEventListener("click", writePassword);

function falsecheck() {
  if (lower === false && upper === false && symmbol === false && nummber === false){
    alert(`Please check a box to generate a password`)
  } 
}

function lengthCheck(lengthy) {
  if (lengthy > 7 && lengthy < 127) {
  } else {
    alert(`Please choose a password length between 8 and 128`)
    length = 0;
  }
}

function generatePassword(length, charset) {
  var finalPassword = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    finalPassword += charset.charAt(Math.floor(Math.random() * n));
  }
  return finalPassword;
}

function lowercase(lower) {
    if (lower === true){
      charset += `abcdefghijklmnopqrstuvwxyz`
    } 
}

function uppercase(upper) {
  if (upper === true){
    charset += `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  } 
}

function numbers(nummber) {
  if (nummber === true){
    charset += `0123456789`
  } 
}

function symboll(symmbol) {
  if (symmbol === true){
    charset += `!@#$%^&*`
  } 
}