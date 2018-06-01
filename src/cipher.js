window.cipher = {

  encode: (offset, string) => {
    // return (offset+string);
    let resultEncode = "";
    // let ingPhrase = string;
    // let offset1 = parseInt(offset);
    // alert("hola mundo"+offset+string);
    for (let i = 0; i < string.length; i++) {
      let convAscii = string.charCodeAt(i);

      if (convAscii >= 65 && convAscii <= 90) {

        let result = ((convAscii - 65 + parseInt(offset)) % 26 + 65);
        let resultLetter = String.fromCharCode(result);
        resultEncode = resultEncode + resultLetter;
        //resultEncode += String.fromCharCode((convAscii - 65 + offset) % 26 + 65);
        // alert("hola");      
      } else if (convAscii >= 97 && convAscii <= 122) {
        resultEncode += String.fromCharCode((convAscii - 97 + parseInt(offset)) % 26 + 97);
      } else {
        resultEncode = resultEncode + string[i];
        //   resultEncode += String.fromCharCode((resultEncode));
      }
    }
    return resultEncode;
  },

  decode: (offset, string) => { 
    let resultDecode = "";
    for (let i = 0; i < string.length; i++) {
      let convAscii = string.charCodeAt(i);

      if (convAscii >= 65 && convAscii <= 90) {

        let result = ((convAscii - 90 - parseInt(offset)) % 26 + 90);
        let resulLetter = String.fromCharCode(result);
        resultDecode = resultDecode + resulLetter;
      } else if (convAscii >= 97 && convAscii <= 122) {
        resultDecode += String.fromCharCode((convAscii - 122 - parseInt(offset)) % 26 + 122);
      } else {
        resultDecode = resultDecode + string[i];
      }
    }
    return resultDecode;
  },
}