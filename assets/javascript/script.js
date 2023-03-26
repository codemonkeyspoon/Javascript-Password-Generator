const modal = document.getElementById("modal");
const btn = document.getElementById("open-modal");
const result = document.querySelector('#result');
const passLength = document.querySelector('#length');
const passLengthResult = document.querySelector('#length-result');
const includeLowerCase = document.querySelector('#lowercase')
const includeUpperCase = document.querySelector('#uppercase')
const includeNumbers = document.querySelector('#numbers');
const includeSymbols = document.querySelector('#spec-char');
const generateBtn = document.querySelector('#generate');

// Set default password length to 15
document.addEventListener('DOMContentLoaded', () => {
    passLength.value = 15
    passLengthResult.innerText = 15
})

// Listen for password range change
passLength.addEventListener('change', (event) => {
    passLengthResult.innerText = event.target.value
})

function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*()_+{}[];:<>,.?/~`|-=';
  
    var allowedChars = '';
    if (useUppercase) allowedChars += uppercaseChars;
    if (useLowercase) allowedChars += lowercaseChars;
    if (useNumbers) allowedChars += numberChars;
    if (useSymbols) allowedChars += symbolChars;
  
    var password = '';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
    return password;
}

generateBtn.addEventListener('click', () => {
    const password = generatePassword(
        passLength.value,
        includeUpperCase.checked,
        includeLowerCase.checked,
        includeNumbers.checked,
        includeSymbols.checked
    );
    result.innerText = password;
    modal.style.display = "none";
    btn.style.display = "block"
});

btn.onclick = function() {
    modal.style.display = "block";
    btn.style.display = "none"
}