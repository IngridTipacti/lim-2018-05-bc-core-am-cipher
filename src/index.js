// let btnEncrypted = document.getElementById("btnE");
// let btnDecrypted = document.getElementById ("btnD");
let phrase = document.getElementById("writephrase");
let textResult = document.getElementById("TxtResult")


document.getElementById("btnE").addEventListener("click",encrypted);
function encrypted (){
    let offset = document.getElementById("chooseSpaces").value;
    let string = phrase.value;
    textResult.value = cipher.encode(offset,string);
    // textResult.value=cipher.encode(offset,phrase.value)
    // alert(encriptado);
}

