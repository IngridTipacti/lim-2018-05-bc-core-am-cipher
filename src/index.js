let phrase = document.getElementById('writePhrase');
let textResult = document.getElementById('TxtResult');
let spaceNumber = document.getElementById('chooseSpaces');


document.getElementById('btnE').addEventListener('click', encrypted);
function encrypted() {
    textResult.value = cipher.createCipherWithOffset(spaceNumber.value).encode(phrase.value);
}

document.getElementById('btnD').addEventListener('click',decrypted);
function decrypted (){
    textResult.value = cipher.decode(spaceNumber.value, phrase.value);
}

document.getElementById('btnClean').addEventListener('click', clean)
function clean (){
    phrase.value = '';
    textResult.value = '';
    spaceNumber.value = '';
}