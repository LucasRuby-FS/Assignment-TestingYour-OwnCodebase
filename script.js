//1. purgeDuplicate function
console.log("1. purgeDuplicates function");
function purgeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("purgeDuplicate function should expect an array");
  }

  const different = [];

  for (let diff = 0; diff < arr.length; diff++) {
    const equal = arr[diff];
    if (
      !different.includes(equal) &&
      !(Number.isNaN(equal) && different.some(Number.isNaN))
    ) {
      different.push(equal);
    }
  }
  return different;
}

//tests
console.log("Testing purgeDuplicates");
//basic numbers
console.log("Testing numbers with duplicates");
console.log(purgeDuplicates([6, 7, 6, 7, 8, 9, 9]));
//expected [6,7,8,9]

//booleans
console.log("Testing booleans");
console.log(purgeDuplicates([false, true, false, false, true]));
//expected [false,true]

//mixed types
console.log("Testing mixed types");
console.log(purgeDuplicates([2, "top", false, "2", 3, 2]));
//expected [2,"top",false, "2",3]

//strings
console.log("Testing strings with duplicates");
console.log(
  purgeDuplicates(["cat", "cat", "dog", "dog", "dog", "bird", "cat"])
);
//expected ['cat','dog','bird']

//Nan values
console.log("Testing NaN values");
console.log(purgeDuplicates([NaN, NaN, 3, 2, NaN]));
//expect [NaN, 3, 2]

//undefined and null
console.log("Testing undefined and null");
console.log(purgeDuplicates([null, undefined, null, null, undefined]));
//expected [null, undefined]

//objects
console.log(
  "Testing objects used for same references and used against different object"
);
const object = { diff: 2 };
console.log(purgeDuplicates([object, object, { diff: 2 }]));
//expected [{diff:2}, {diff:2}]

//symbols!!!!
console.log("Testing symbols");
const testsym1 = Symbol("y");
const testsym2 = Symbol("y");
const testsym3 = Symbol.for("y");
console.log(
  purgeDuplicates([testsym2, testsym3, testsym2, testsym1, testsym3])
);
//expected [Symbol(y), Symbol(y), Symbol(y)]

//empty arrays
console.log("Testing empty array");
console.log(purgeDuplicates([]));
//expected []

//bad inputs
console.log("Testing errors");
//null
console.log("Testing null input error");
try {
  purgeDuplicates(null);
  console.log("Null didnt error");
} catch (e) {
  console.log("Null did error");
}

//numbers
console.log("Testing number input error");
try {
  purgeDuplicates(234);
  console.log("Number did not error");
} catch (e) {
  console.log("Number did error");
}

//string
console.log("Testing string input error");
try {
  purgeDuplicates("not an array");
  console.log("String input didnt error");
} catch (e) {
  console.log("String input did error");
}
//&
//2. capitalizeWords(str) function
console.log("2. capitalizeWords function");
function capitalizeWords(str) {
  if (typeof str != "string") {
    throw new TypeError("input must be string");
  }

  return str.replace(/\S+/g, (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
}

//tests
console.log("Tests for capitalizeWords");
//words with punctuation
console.log("Testing words with punctuations");
console.log(capitalizeWords("well i, learn a ton! with books."));
//expected "Well I, Learn A Ton! With Books."

//mixed cases inputs
console.log("Testing mixed cases inputs");
console.log(capitalizeWords("tEAchIng Is grEAT"));
//expected "Teaching Is Great"

//normal sentencing
console.log("Testing normal sentences");
console.log(capitalizeWords("this class is so fun"));
//expected "This Class Is So Fun"

//empty strings
console.log("Testing empty strings");
console.log(capitalizeWords(""));
//expected ""

//extra spacing between words!!!!!
console.log("Testing extra spaces between words");
console.log(capitalizeWords(" many    spaces   are fun  "));
//expected "  Many  Spaces  Are  Fun  "

//single words
console.log("Testing single words");
console.log(capitalizeWords("justin"));
//expected "Justin"

//bad inputs
console.log("Testing errors");
//null
console.log("Null input should error");
try {
  capitalizeWords(null);
  console.log("Failed null input didnt error");
} catch (e) {
  console.log("Passed null input did error");
}

//undefined
console.log("Undefined input should error");
try {
  capitalizeWords(undefined);
  console.log("Failed undefined input didnt error");
} catch (e) {
  console.log("Passed undefined input did error");
}

//numbers
console.log("Number input should error");
try {
  capitalizeWords(343);
  console.log("Failed number input didnt error");
} catch (e) {
  console.log("Passed number input did error");
}

//3 isPalindrome(str) function
console.log("3. isPalindrome function.");
function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("only can be a string");
  }

  const remove = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  for (let compare = 0; compare < Math.floor(remove.length / 2); compare++) {
    if (remove[compare] !== remove[remove.length - 1 - compare]) {
      return false;
    }
  }
  return true;
}

//tests
console.log("Testing isPalindrome function");
console.log("Testing simple palindrome");
console.log(isPalindrome("level"));
//expected true

//not a palindrome
console.log("Testing not a palindromes");
console.log(isPalindrome("not"));
//expected false

//palindromes with mixed cases
console.log("Testing palindromes with mixed cases");
console.log(isPalindrome("RaceCar"));
//expected true

//palindromes with spaces
console.log("Testing palindromes with spaces");
console.log(isPalindrome("No lemon no melon"));
//expected true

//single character
console.log("Testing single characters");
console.log(isPalindrome("b"));
//expected true

//empty strings
console.log("Testing empty strings");
console.log(isPalindrome(""));
//expected true

//punctuation
console.log("Testing with punctuation");
console.log(isPalindrome("Well 'dont' test Me"));
//expected false

//bad inputs

console.log("Error tests for isPalindrome");
//null
console.log("Null input should error");
try {
  isPalindrome(null);
  console.log("Failed null input did not have an error");
} catch (e) {
  console.log("Passed null input error");
}
//undefined
console.log("Undefined input should error");
try {
  isPalindrome(undefined);
  console.log("Failed undefined input did not error");
} catch (e) {
  console.log("Passed undefined input error");
}
//numbers
console.log("Number input should error");
try {
  isPalindrome(321);
  console.log("Failed number input did not error");
} catch (e) {
  console.log("Passed number input error");
}

//4 countVowels(str) function
console.log("4. countVowels function");
function countVowels(str) {
  if (typeof str !== "string") {
    throw new TypeError("input must be a string");
  }

  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let letters = 0; letters < str.length; letters++) {
    if (vowels.includes(str[letters])) {
      count++;
    }
  }
  return count;
}

//tests
console.log("Testing countVowels function");
//normal sentences
console.log("Testing normal sentences");
console.log(countVowels("Hi Welcome"));
//expected 4

//all vowels
console.log("Testing all vowels");
console.log(countVowels("aeiouAEIOU"));
//expected 10

//no vowels
console.log("Testing with no vowels");
console.log(countVowels("cfnz"));
//Expected 0

//mixed characters with numbers
console.log("Testing mixed characters with numbers in them");
console.log(countVowels("Th1s qu8ck gr0ws larg3"));
//expected 2

//empty strings
console.log("Testing empty strings");
console.log(countVowels(""));
//expected 0

//bad inputs
console.log("Testing errors");
//number
console.log("Should error number input");
try {
  countVowels(341);
  console.log("Failed number input didnt error");
} catch (e) {
  console.log("Passed number input did error");
}

//null
console.log("Should error null input");
try {
  countVowels(null);
  console.log("Failed null input didnt error");
} catch (e) {
  console.log("Passed null input did error");
}

//undefined
console.log("Should error undefined input");
try {
  countVowels(undefined);
  console.log("Failed undefined input didnt error");
} catch (e) {
  console.log("Passed undefined input did error");
}
