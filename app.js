"use strict";
/*eslint-disable*/
/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @returns {int} The sum of the two numbers.
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
