/*
Do the same for the rest of the functions and test cases in yesterday’s assignment:
a. calcDownpayment
b. sumDigits
c. multDigits
d. convertFahrenheit
e. calcDistance
*/
("use strict");

const assert = require("assert");

/* import from multiFunctions.js module */

const functionsModule = require("./multiFunctions.js");
const calcDownpayment = functionsModule.calcDownpayment;
const sumDigits = functionsModule.sumDigits;
const multDigits = functionsModule.multDigits;
const convertFahrenheit = functionsModule.convertFahrenheit;
const calcDistance = functionsModule.calcDistance;

describe("calculate house downpayment ", function () {
  it("expect 2000: ", function () {
    assert.strictEqual(calcDownpayment(40000), true);
  });
});

describe("sum digits", function () {
  it("1234", function () {
    assert.strictEqual(sumDigits(10), true);
  });
});
describe("multiple digits", function () {
  it("102", function () {
    assert.deepStrictEqual(multDigits(0), true);
  });
});
describe("returns the temperature in Celsius", function () {
  it("expect 0: ", function () {
    assert.equal(convertFahrenheit(32), true);
  });
});
describe("co-ordinates of two points", function () {
  it("expect 7.07 : ", function () {
    assert.deepStrictEqual(calcDistance(0, 0, 5, 5), true);
  });
});
