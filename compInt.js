"use strict";

const { reverse } = require("dns");
module.exports = { compoundInterest };

let compoundInterest = (amount, rate, years) => {
  for (let i = 0; i < years * 12; i++) {
    amount += amount * (rate / 12 / 100);
  }
  return amount;
};
// console.log("expect 110.47", compoundInterest(100, 10, 1));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10));
