let btnEncrypted = document.getElementById("btnE");
let btnDecrypted = document.getElementById ("btnD");
let phrase = document.getElementById("writephrase");
let textResult = document.getElementById("TxtResult")


document.getElementById("btnE").addEventListener("click",encrypted);
function encrypted (){
    const offset = document.getElementById("chooseSpaces").value;
    textResult.value=cipher.encode(offset,phrase.value)
}




// let btnEncrypted = document.getElementById("btnE");
// let btnDecrypted = document.getElementById ("btnD");
// let textForE = document.getElementById("writetextE");
// let textForD = document.getElementById("writetextD")
// let textR = document.getElementById("TxtResult")

// document.getElementById("btnE").addEventListener("click",codificar);
// function codificar (){
//     var result= document.getElementById("writetextE").value;
//     alert(resultados);
//     }
