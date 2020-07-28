import utf8Decode from "./utf8Decode";

const fromCharCode = String.fromCharCode;
const utf8Encode = (string) => {
  string = string.replace(/\r\n/g, "\n");

  var utftext = "";

  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n);

    if (c < 128) {
      utftext += fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      utftext += fromCharCode((c >> 6) | 192);
      utftext += fromCharCode((c & 63) | 128);
    } else {
      utftext += fromCharCode((c >> 12) | 224);
      utftext += fromCharCode(((c >> 6) & 63) | 128);
      utftext += fromCharCode((c & 63) | 128);
    }
  }
  return utftext;
};

const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const Base64 = {
  // public method for encoding

  encode: function (input) {
    var output = "";

    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;

    var i = 0;

    input = utf8Encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);

      chr2 = input.charCodeAt(i++);

      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;

      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);

      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);

      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output =
        output +
        b64.charAt(enc1) +
        b64.charAt(enc2) +
        b64.charAt(enc3) +
        b64.charAt(enc4);
    }

    return output;
  },

  // public method for decoding

  decode: function (input) {
    var output = "";

    var chr1, chr2, chr3;

    var enc1, enc2, enc3, enc4;

    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = b64.indexOf(input.charAt(i++));
      enc2 = b64.indexOf(input.charAt(i++));
      enc3 = b64.indexOf(input.charAt(i++));
      enc4 = b64.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);

      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);

      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + fromCharCode(chr3);
      }
    }
    return utf8Decode(output);
  },
};

if (!window.atob) {
  window.atob = Base64.decode;
}

export default Base64;
