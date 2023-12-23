/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

let isPalindrome = (str) => {
  let n = str.length;
  let i = 0;
  let j = n - 1;
  while(i <= j) {
    if (str[i] != str[j]){
      return false;
    }
    i += 1
    j -= 1
  }

  return true;
}

console.log(isPalindrome("malayalam"));