window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(offset, string) {
  let resultEncode = "";
  let ingPhrase = string;
  let offset = parseInt(offset);
  for (let i = 0; i < ingPhrase.length; i++) {
    let convAscii = ingPhrase.charCodeAt(i);

    if (convAscii >= 65 && convAscii <= 90) {
      resultEncode += String.fromCharCode((convAscii - 65 + offset) % 26 + 65); //mayus
    } else if (convAscii >= 97 && convAscii <= 122) {
      resultEncode += String.fromCharCode((convAscii - 97 + offset) % 26 + 97); //minus
    } else if (convAscii >= 32 && convAscii <= 64) {
      resultEncode += String.fromCharCode(resultEncode); //signos
    } else {
      resultEncode += String.fromCharCode(resultEncode);
    }
    return resultEncode;
  }

