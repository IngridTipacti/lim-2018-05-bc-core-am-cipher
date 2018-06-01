// let btnEncrypted = document.getElementById("btnE");
// let btnDecrypted = document.getElementById ("btnD");
let phrase = document.getElementById("writephrase");
let textResult = document.getElementById("TxtResult");
let spacenumber = document.getElementById("chooseSpaces");


document.getElementById("btnE").addEventListener("click", encrypted);
function encrypted() {
    textResult.value = cipher.encode(spacenumber.value, phrase.value);
    // textResult.value=cipher.encode(offset,phrase.value)
    // alert(encriptado);
}

document.getElementById("btnD").addEventListener("click",decrypted);
function decrypted (){
    textResult.value = cipher.decode(spacenumber.value, phrase.value);
}

document.getElementById("btnClean").addEventListener("click", clean)
function clean (){
    phrase.value = "";
    textResult.value = "";
    spacenumber.value = "";
}