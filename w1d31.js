"use strict";
/* global assert isVowel*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */

/**
 * check char is vowel.
 * @param {any} x have to a char.
 * @returns {string, boolean} true or not.
 */

function isVowel(x) {
  if ("aeiouAEIOU".indexOf(x) != -1) {
    console.log(x + " is vowel");
    // return true;
  } else {
    console.log(x + " is not vowel");
    // return false;
  }
  return x;
}
console.log(isVowel("5"));

describe("isVowel", function () {
  it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
  });
});
