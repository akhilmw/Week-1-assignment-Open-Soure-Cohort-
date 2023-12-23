/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

let isAnagram = (str1, str2) => {
  let count1 = Array(26).fill(0);
  let count2 = Array(26).fill(0);

  let n = str1.length;
  let m = str2.length;

  if(n != m) {
    return false;
  }

  for(let i = 0; i < n; i++) {
    count1[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
  }
  for(let i = 0; i < n; i++) {
    count2[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
  }

  for (let i = 0; i < 26; i++){
    if(count1[i] != count2[i]){
      return false;
    }
  }


  return true;

}

console.log(isAnagram("abba", "abaa"));




