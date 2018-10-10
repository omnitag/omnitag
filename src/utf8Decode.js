const fromCharCode = String.fromCharCode;

const utf8Decode = utftext => {
  let string = '';
  let i = 0;
  let c = 0;
  let c2 = 0;
  let c3 = 0;
  const len = utftext.length; 

  while (i < len) {
    c = utftext.charCodeAt(i);
    if (c < 128) {
      string += fromCharCode(c);
      i++;
    } else if (c > 191 && c < 224) {
      c2 = utftext.charCodeAt(i + 1);
      string += fromCharCode(((c & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      string += fromCharCode(
        ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63),
      );
      i += 3;
    }
  }
  return string;
};
export default utf8Decode;
