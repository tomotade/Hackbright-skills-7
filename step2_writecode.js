// 1) Sum To Zero
//Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

//For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

//# 1) Sum To Zero //SOLUTION

function addToZero(arr) {
  /*
    This function takes in an array of numbers and returns true if any two numbers in the list sum to 0, and false otherwise.
    */
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true;
      }
    }
  }
  return false;
}
// Runtime: O(n^2) - where n is the length of the input array

// Example usage:
console.log(addToZero([])); // false
console.log(addToZero([1])); // false
console.log(addToZero([1, 2, 3])); // false
console.log(addToZero([1, 2, 3, -2])); // true

// 2) Unique Characters
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

// 2) Unique Characters //SOLUTION

function hasUniqueChars(word) {
  /*
    This function takes in a single word (string) and returns true if the word contains only unique characters, false otherwise.
    */
  const charSet = new Set();
  for (const char of word) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}
// Runtime: O(n) - where n is the length of the input word

// Example usage:
console.log(hasUniqueChars("Monday")); // true
console.log(hasUniqueChars("Moonday")); // false

// 3) Pangram Sentence

//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

//Write a function to check a sentence to see if it is a pangram or not.

//For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

// 3) Pangram Sentence //SOLUTION
function isPangram(sentence) {
  /*
    This function checks if a sentence is a pangram (contains all letters of the English alphabet at least once).
    */
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
  const sentenceSet = new Set(sentence.toLowerCase());
  return [...alphabetSet].every((char) => sentenceSet.has(char));
}
// Runtime: O(n) - where n is the length of the input sentence

// Example usage:
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // true
console.log(isPangram("I like cats, but not mice")); // false

// 4) Longest Word
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

//For example:

findLongestWord(["hi", "hello"]);
// -> 5

// 4) Longest Word  //SOLUTION
function findLongestWord(words) {
  /*
    This function takes a list of words and returns the length of the longest one.
    */
  let maxLength = 0;
  for (const word of words) {
    maxLength = Math.max(maxLength, word.length);
  }
  return maxLength;
}
// Runtime: O(m * n) - where m is the number of words and n is the average length of the words

// Example usage:
console.log(findLongestWord(["hi", "hello"])); // 5
