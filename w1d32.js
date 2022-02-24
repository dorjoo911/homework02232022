"use strict";
/** 
Test your computeSalesCommission function from yesterday with the following Mocha test.
First do the test by adding the following to the same file that contains your
computeSalesCommission code. Then put it in a separate file and use CommonJS modules.
Call this file d13mochaTests.js.
*/

const assert = require("assert");

let computeSalesCommission = (salaried, salesAmount) => {
  let salesCommission = 0;

  if (salaried === true) {
    if (salesAmount < 300) {
      salesCommission;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      salesCommission += salesAmount * 0.01;
    } else if (salesAmount > 500) {
      salesCommission += (salesAmount - 500) * 0.02 + 500 * 0.01;
    }
  } else {
    if (salesAmount < 300) {
      salesCommission;
    } else if (salesAmount >= 300 && salesAmount <= 500) {
      salesCommission += salesAmount * 0.02;
    } else {
      salesCommission += (salesAmount - 500) * 0.03 + 500 * 0.02;
    }
  }
  return salesCommission;
};

describe("test of ComputSalesCommission", function () {
  it("tests salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 200), 0);
  });
  it("tests not salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 200), 0);
  });
  it("tests salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 300), 3);
  });
  it("tests not salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 300), 6);
  });
  it("tests salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
  });
  it("tests not salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
  });
});
