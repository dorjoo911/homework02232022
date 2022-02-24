"use strict";

// const { reverse } = require("dns");
// module.exports = { compoundInterest };

const sumDigits = (int) => {
  let arr = int.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
};
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));

const multDigits = (n) => {
  let mult = 1;
  let fromNumberToArray = [...n.toString()].map(Number);
  for (let i = 0; i < fromNumberToArray.length; i++) {
    mult *= fromNumberToArray[i];
  }
  return mult;
};
//   console.log(multDigits(1234));
//   console.log(multDigits(102));
//   console.log(multDigits(8));
