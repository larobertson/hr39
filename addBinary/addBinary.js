/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // let i;
  // if (a.length > b.length) {
  //     i = a.length;
  // } else {
  //     i = b.length;
  // }
  // let lenA = a.length - 1;
  // let lenB = b.length - 1;
  // let c = 0;
  // let sum = [];
  // let place;
  // while(i >= 0) {
  //     if (lenA >= 0 && lenB >= 0) {
  //         place = parseInt(a[lenA]) + parseInt(b[lenB]) + c;
  //     } else if (lenA >= 0) {
  //         place = parseInt(a[lenA]) + c;
  //     } else if (lenB >= 0) {
  //         place = parseInt(b[lenB]) + c;
  //     } else if (c){
  //         place = c;
  //     } 
  //     if (place <= 1) {
  //         sum.unshift(place);
  //         c = 0;
  //     } else if (place === 2) {
  //         sum.unshift('0');
  //         c = 1;
  //     } else if (place === 3) {
  //         sum.unshift('1');
  //         c = 1;
  //     }
  //     lenA -= 1;
  //     lenB -= 1;
  //     i -= 1;
  // }
  // return sum.join('');
  let sum = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  
  while (i >= 0 || j >= 0) {
      let digA = a[i] ? a[i] : '0';
      let digB = b[j] ? b[j] : '0';
      sum = String(digA ^ digB ^ carry) + sum;
      if (digA === digB && digA !== String(carry)) {
          carry = Number(!carry);
      }
      i --;
      j --;
  }
  if (carry) {
      sum = (String(carry) + sum);
  }
  return sum;
};