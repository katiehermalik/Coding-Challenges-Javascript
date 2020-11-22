// ------------------ // square every digit of a number and concatenate them

// function squareDigits(num){
//   numString = num.toString()
//   newArray = []
//   for (let i = 0; i < numString.length; i++) {
//     newArray.push(numString[i] ** 2)
//   }
//   console.log(Number(newArray.join('')))
// }
// squareDigits(34567)


// ------------------ // return the highest and lowest number

// function highAndLow(numbers){
//   numSet = numbers.split(' ').map(Number);
//   console.log(Math.max(...numSet) + ' ' + Math.min(...numSet));
// }
// highAndLow('3 9 45 2 5');


// ------------------ // Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

// function spinWords(str){
//   console.log(str.split(' ').map((current) => {
//     if (current.length >= 5) {
//       return current.split('').reverse().join('')
//     } else {
//       return current
//     };
//   }).join(' '))
// };

// spinWords('This is another test')


// ------------------ // Delete occurrences of an element if it occurs more than n times

// deleteNth = (arr, n) => {
//   var counts = {};
//   for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     if (counts[num] === n) {
//       arr.splice(i, 1);
//       i--;
//     } else if (counts[num]) {
//       counts[num] += 1
//     } else {
//       counts[num] = 1
//     }
//   }
// }

// deleteNth([1, 2, 3, 1, 1, 2, 2, 3, 3, 2, 4, 5, 1], 3)


// ------------------ // Find the unique number

// function findUniq(arr) {
//   arr.filter((num, index) => {
//     if (num !== arr[index - 1] && num !== arr[index + 1]) {
//       console.log(num);
//     }
//   });
// };

// findUniq([ 1, 1, 1, 6.5, 1, 1 ]);


// ------------------ // Elements in an array that are greater than The Sum all the elements to its right side.

// var arrayLeaders = numbers => {
//   leaders = [];
//   for (let i = 0; i < numbers.length - 1; i++) {
//     let sum = numbers.slice(i + 1, numbers.length).reduce((a, b) => a + b);
//     console.log(sum);
//     if (numbers[i] > sum) {
//       leaders.push(numbers[i]);
//     }
//   }
//   if (numbers[numbers.length - 1] > 0) {
//     leaders.push(numbers[numbers.length - 1]);
//   }
//   console.log(leaders);
// }

// arrayLeaders([0,-1,-29,3,2])


// ------------------ // remove everything inside the parentheses as well as the parentheses themselves

// function removeParentheses(string) {
//   while (string.includes('(')) {
//     string = string.replace(/\([^\(\)]*\)/, '');
//   } 
//   console.log(string);
// }

// removeParentheses('hello exam(ple (words(more words) here) some)thing');


// ------------------ // returns true if the first argument(string) passed in ends with the 2nd argument (also a string)

// function solution(str, ending) {
//   if (ending) {
//     console.log(str.slice(-ending.length) === ending ? true : false)
//   } else {
//     console.log(true);
//   }
// }

// solution('abcde', 'cde');


// ------------------ // returns whether the number passed in is a prime number or not

// function isPrime(num) {
//   if (num < 2) return false;
//   const sqrt = Math.floor(Math.sqrt(num));
//   for (let i = 2; i <= sqrt; i++)
//     if (num % i === 0) return false;
//   return true;
// }

// console.log(isPrime(27));

// ------------------- // Find the int that appears an odd number of times. Assume there will always be only one integer that appears an odd number of times.

// function findOdd(array) {
//   const obj = {}
//   array.forEach(num => {
//     Object.keys(obj).includes(num.toString()) 
//     ? obj[num]++ : obj[num] = 1
//   })
//   oddValue = Object.values(obj).find(element => element % 2 !== 0);
//   return Object.keys(obj).find(key => Number(obj[key]) === oddValue);
// }

// findOdd([5,4,3,2,1,5,4,3,2,10,10]);


// ------------------- // find the smallest integer in an array of integers

// findSmallestInt = (args) => {
//   console.log(Math.min(...args)) 
// }

// findSmallestInt([34, -345, -1, 100])


// ------------------- // Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// function toCamelCase(phrase) {
//   phraseArr = phrase.split("");
//   console.log(phraseArr)
//   for (let i = 0; i < phraseArr.length; i++) {
//     if (phraseArr[i] === '-' || phraseArr[i] === '_') {
//       phraseArr[i+1] = phraseArr[i+1].toUpperCase()
//       phraseArr.splice(i, 1);
//     }
//   }
//   console.log(phraseArr.join(''))
// }

// toCamelCase("the-stealth-warrior")


// ------------------- // square every digit of a number

// squareEveryDigit = (num) => {
//   numArr = (String(num)).split('').map(number => number**2).join('')
//   console.log(Number(numArr))
// }

// squareEveryDigit(9119);


// ------------------- // ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

// function checkPin(pin) {
//   if (pin.length === 4 || pin.length === 6) {
//     (pin[pin.search(/[^\d]/g)]) ? console.log(false) : console.log(true)
//   } else console.log(false)
// }

// checkPin('192556')


// ------------------- // Population Growth - return n number of entire years needed to get a population greater or equal to p.

// const nb_year = (p0, percent, aug, p) => {
//   let n = 0;
//   while (p0 < p) {
//     p0 += (p0 * percent/100) + aug;
//     n++;
//   }
//   return n;
// }

// console.log(nb_year(1500, 5, 100, 5000));

// ------------------- // Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// function solution(nums){
//   if (nums === null || nums === []) {
//     return [];
//   } else return nums.sort((a, b) => {return a-b})
// }

// console.log(solution([1, 2, 10, 50, 5]));


// ------------------- // find all the anagrams of a word from a list

function anagrams(word, words) {
  wordObj = {}
  wordSplit = word.split('')
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordObj[wordSplit[i]]) {
      wordObj[wordSplit[i]]++
    } else wordObj[wordSplit[i]] = 1
  }
  let anagrams = []
  for (let i = 0; i < words.length; i++) {
    let wordsObj = {}
    let wordsSplit = words[i].split('')
    for (let j = 0; j < wordsSplit.length; j++) {
      if (wordsObj[wordsSplit[j]]) {
        wordsObj[wordsSplit[j]]++
      } else wordsObj[wordsSplit[j]] = 1
    }
    if (JSON.stringify(wordObj) === JSON.stringify(wordsObj, Object.keys(wordsObj).sort())) {
      anagrams.push(words[i]);
    }
  }
  return anagrams
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))