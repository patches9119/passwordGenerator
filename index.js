
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const specialEl = document.getElementById('special');
const buttonEl = document.getElementById('button');
const resultEl = document.getElementById('result');

buttonEl.addEventListener('click', function(event) {
    
    console.log("This is working!");

    let length = lengthEl.value;
    let password = '';

    let totalOptions = '';
    if (!parseInt(length))
    {
        alert("Please use a valid number for the length!");
        return;
    }
    if(lowercaseEl.checked) {
        totalOptions += 'abcdefghijklmnopqrstubwxyz';
    }
    if(uppercaseEl.checked) {
        totalOptions += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(specialEl.checked) {
        totalOptions += '!@#$%^&*()<>?';
    }

    if(!(specialEl.checked || lowercaseEl.checked || uppercaseEl.checked)) {
        alert("Please select at least one option!");
        return;
    }

    for ( var i = 0; i < length; i++ ) {
        password += totalOptions.charAt(Math.floor(Math.random() * totalOptions.length));
    }

    console.log("Password: ", password);

    resultEl.textContent = password;



    console.log("Total options: ",totalOptions);
    console.log("Length: ",length);
});
