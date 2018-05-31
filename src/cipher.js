window.cipher = {

  encode : (offset, string) => {

   // return (offset+string);


    let resultEncode = "";
    let ingPhrase = string;
    let offset1 = parseInt(offset);
        // alert("hola mundo"+offset+string);
    for (let i = 0; i < ingPhrase.length; i++) {

      let convAscii = ingPhrase.charCodeAt(i);

      if (convAscii >= 65 && convAscii <= 90) {

        let result = (convAscii - 65 + offset1) % 26 + 65;
        let resulLetter = String.fromCharCode(result);
        resultEncode= resultEncode +  resulLetter ;
        //resultEncode += String.fromCharCode((convAscii - 65 + offset) % 26 + 65);
        // alert("hola");
      
      } else if (convAscii >= 97 && convAscii <= 122) {
        resultEncode += String.fromCharCode((convAscii - 97 + offset1) % 26 + 97);
      } else if (convAscii >= 32 && convAscii <= 64) {
        resultEncode += String.fromCharCode(resultEncode);
      } else {
        resultEncode += String.fromCharCode(resultEncode);
      }
      //return resultEncode;
    }
    return resultEncode;
  }
};