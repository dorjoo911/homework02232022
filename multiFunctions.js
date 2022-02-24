"use strict";

/*eslint-disable*/

const { reverse } = require("dns");
module.exports = {
  calcDownpayment,
  sumDigits,
  multDigits,
  convertFahrenheit,
  calcDistance,
};

const calcDownpayment = (cost) => {
  let downpayment = 0;
  if (cost < 50000) {
    downpayment = cost * 0.05;
  } else if (cost >= 50000 && cost < 100000) {
    downpayment += (cost - 50000) * 0.1 + 2500;
  } else if (cost >= 100000 && cost < 200000) {
    downpayment += (cost - 100000) * 0.15 + 7500;
  } else if (cost >= 200000) {
    downpayment += (cost - 200000) * 0.1 + 20000;
  }
  return downpayment;
};

const sumDigits = (int) => {
  let arr = int.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
};

const multDigits = (n) => {
  let mult = 1;
  let fromNumberToArray = [...n.toString()].map(Number);
  for (let i = 0; i < fromNumberToArray.length; i++) {
    mult *= fromNumberToArray[i];
  }
  return mult;
};

const convertFahrenheit = (f) => (celsius = (f - 32) / 1.8);

const calcDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
