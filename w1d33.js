/*
Add an additional Mocha “describe” method call with “it” method calls to d13mochaTests.js for
each of the two test cases given for your compoundInterest function from the previous lesson.
Import your compoundInterest code using CommonJS modules.
*/
("use strict");
const assert = require("assert");
// /* import from compInt.js module */
// const functionsModule = require("./compInt.js");
// const compoundInterest = functionsModule.compoundInterest;

let compoundInterest = (amount, rate, years) => {
  for (let i = 0; i < years * 12; i++) {
    amount += amount * (rate / 12 / 100);
  }
  return amount;
};

describe("compoundInterest returns amount of compound interest ", function () {
  it("expect 110.47", function () {
    assert.equal(compoundInterest(10000, 5, 10), true);
  });
});
