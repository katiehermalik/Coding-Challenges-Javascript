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

// function anagrams(word, words) {
//   wordObj = {}
//   wordSplit = word.split('')
//   for (let i = 0; i < wordSplit.length; i++) {
//     if (wordObj[wordSplit[i]]) {
//       wordObj[wordSplit[i]]++
//     } else wordObj[wordSplit[i]] = 1
//   }
//   let anagrams = []
//   for (let i = 0; i < words.length; i++) {
//     let wordsObj = {}
//     let wordsSplit = words[i].split('')
//     for (let j = 0; j < wordsSplit.length; j++) {
//       if (wordsObj[wordsSplit[j]]) {
//         wordsObj[wordsSplit[j]]++
//       } else wordsObj[wordsSplit[j]] = 1
//     }
//     if (JSON.stringify(wordObj) === JSON.stringify(wordsObj, Object.keys(wordsObj).sort())) {
//       anagrams.push(words[i]);
//     }
//   }
//   return anagrams
// }

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

// ------------------- // Above, refactored

// function anagrams(word, words) {
//   const sortedWord = word.split('').sort().join('');
//   let anagrams = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].split('').sort().join('') === sortedWord) {
//       anagrams.push(words[i]);
//     }
//   }
//   return anagrams;
// }

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));


// ------------------- // Given a number , return the maximum number that could be formed from the digits of the number given.

// function maxNumber(n) {
//   return Number(String(n).split('').sort().reverse().join(''));
// }

// console.log(maxNumber(63792));


// ------------------- // Find the middle element

// function middle(inputArray) {
//   max = Math.max(...inputArray);
//   min = Math.min(...inputArray);
//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] !== max && inputArray[i] !== min) return i;
//   }
// };

// console.log(middle([16, -17, -5]));


// ------------------- // Replace all items

// function replaceAll(seq, find, replace) {
//   if (typeof seq === "string") seq = seq.split("");
//   for (let i = 0; i < seq.length; i++) {
//     if (seq.indexOf(find) !== -1) seq.splice(seq.indexOf(find), 1, replace);
//   }
//   if (typeof seq[0] === "string") seq = seq.join("");
//   return seq;
// }

// console.log(replaceAll([1,2,2], 1, 2))


// ------------------- // Sum even numbers

// function sumEvenNumbers(input) {
//   let sum = 0;   
//   for (const i of input) {     
//     if (i % 2 === 0) sum += i;   
//   }   
//   return sum; 
// }

// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// ------------------- // Maximum Multiple - Given a Divisor and a Bound , Find the largest integer N where N is divisible by divisor, N is less than or equal to bound, and N is greater than 0.

// function maxMultiple(divisor, bound) {
//   let tempArr = [];
//   for (let i = divisor; i <= bound; i++) tempArr.push(i);
//   return Math.max(...tempArr.filter((num) => num % divisor === 0));
// }

// console.log(maxMultiple(37, 200))


// ------------------- // Triangular Number - Given a number 'T' from interval [1; 2147483646], find if it is triangular number or not.

// function isTriangular(t) {   
//   return (((Math.sqrt(8 * t + 1) - 1) / 2) % 1 === 0); 
// }

// console.log(isTriangular(2))


// ------------------- // Create a new matrix where the columns and rows of the original are swapped

// function transpose(matrix) {
//   let trans = [];
//   let oneMatrix = [];
//   let i = 0;
//   let size = matrix.length;
//   while (i < matrix[0].length) {
//   matrix.map(matri => {
//     oneMatrix.push(matri[i])
//   })
//   i++;
//   }
//   while (oneMatrix.length > 0) trans.push(oneMatrix.splice(0, size))
//   return trans
// }

// console.log(transpose([[1,2,3],[4,5,6]]))


// ------------------- // Using n as a parameter, return a 'plus' pattern from the function.

// function pattern(n){
//   let i = 1;
//   const verticalArray = [];
//   const horizontalArray = [];
  
//   while (i <= n) {
//     if (i > 9) {
//       let num = Number(String(i).split('').pop())
//       verticalArray.push(`${num}\n`.padStart(n + 1, ' '))
//       horizontalArray.push(num)
//     } else {
//       verticalArray.push(`${i}\n`.padStart(n + 1, ' '))
//       horizontalArray.push(i)
//     }
//     i++
//   }
//   verticalArray.push(...verticalArray.slice().reverse().slice(1, verticalArray.length))
//   horizontalArray.push(...horizontalArray.slice().reverse().slice(1, horizontalArray.length))
//   horizontalArray.push('\n')
//   verticalArray.splice(n - 1, 1, horizontalArray.join(''))
//   return verticalArray.join('')
// }

// console.log(pattern(22));


// ------------------- // Your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator, or the eval function due to the fact that you can get around the if requirement using it.

// function fourSeven(num){
//   let otherNumber = ([...arguments].filter(number => number === 7))[0] && 4 || 
//   ([...arguments].filter(number => number === 4))[0] && 7 ||
//   ([...arguments].filter(number => number !== 4 && number !== 7)) && 0
//   return otherNumber
// }

// console.log(fourSeven(2))


// ------------------- // There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B. Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

// function solve(stones) {
//   const remove = {
//     howMany: 0,
//   }
//   let [...stonesArray] = stones
//   stonesArray.map((stone, i) => { 
//     stone === stonesArray[i + 1]? remove.howMany++ : remove.howMany
//   })
//   return remove.howMany
// }

// console.log(solve("GBRGGRBBBBRRGGGB"))


// ------------------- // Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// const a1 = ["xyz", "live", "strong"];
// const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// function inArray(arr1, arr2) {
//   let newArr = [];
//   arr2.map((el) => {
//     arr1.map((x) => {
//       el.includes(x) ? newArr.push(x) : null;
//     });
//   });
//   const set = new Set(newArr.sort());
//   return Array.from(set);
// }

// console.log(inArray(a1, a2));

// ------------------- // Filter test

// function getEvenNumbers(numbersArray){
//   return numbersArray.filter(num => num % 2 === 0)
// }

// console.log(getEvenNumbers([2,4,5,6]));


// ------------------- // Find the length of the longest substring of s that does not repeat any letters.

// function lengthOfLongestSubstring(s) {
//   if (s.length !== 0) {
//     let substrings = [];
//     const arr = s.split("");
//     if (arr.join('') === [...new Set(arr)].join('')) {
//       substrings.push(s)
//     } else {
//       for (let i = 0; i < s.length; i++) {
//         let characters = [];
//         let sub = s.substring(i);
//         for (let j = 0; j < sub.length; j++) {
//           if (j === (sub.length - 1) && sub[j] !== sub[j - 1]) {
//             if (characters.includes(sub[j])) {
//               substrings.push(characters.join(''));
//             } else {
//               characters.push(sub[j])
//               substrings.push(characters.join(''));
//             }
//           } else if (characters.includes(sub[j])) {
//             substrings.push(characters.join(''));
//             break;
//           } else {
//             characters.push(sub[j])
//           }
//         }
//       }
//     }
//     return substrings.reduce((a, b) => a.length > b.length ? a : b).length
//   } else {
//     return 0;
//   }
// };

// console.log(lengthOfLongestSubstring("pwwkew"))


// ------------------- // Two Sum - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let remainingNums = nums.slice(i + 1);
//     for (let j = 0; j < remainingNums.length; j++) {
//       if (remainingNums[j] + nums[i] === target) {
//         return `${i}${nums.lastIndexOf(remainingNums[j])}`.split('').map(elem => Number(elem));
//       } 
//     }
//   }
// };

// console.log(twoSum([2,7,11,15,7], 26))

// ------------------- // Two Sum - more optimal solution:

// function twoSum(nums, target) {
//   const comp = {};
//   for(let i=0; i < nums.length; i++){
//       if(comp[nums[i]] >= 0){
//           return [comp[nums[i]], i]
//       }
//       comp[target-nums[i]] = i
//   }
// };

// console.log(twoSum([3, 3], 6))

// ------------------- // Find the second largest number in an array

// function getSecondLargest(nums) {
//   const newArr = [...new Set(nums)]
//   const maxNum = Math.max(...newArr)
//   const indexMax = newArr.indexOf(maxNum)
//   newArr.splice(indexMax, 1)
//   return Math.max(...newArr)
// }

// function getSecondLargest(nums) {
//   let largestNum = -Infinity
//   let secondLargestNum = -Infinity
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > largestNum) largestNum = nums[i]
//     if (nums[i] < largestNum && nums[i] >= secondLargestNum) secondLargestNum = nums[i]
//   }
//   return secondLargestNum;
// }

// console.log(getSecondLargest([2, 3, 6, 6, 5]));

// ------------------- // Add Two Arrays

// function addTwoNumbers(l1, l2) {
//   return String(Number(l1.reverse().join('')) + Number(l2.reverse().join(''))).split('').reverse().map((str) => +str);
// }

// console.log(addTwoNumbers([2,4,3], [5,6,4]))

// ------------------- // Break up camel case - insert space

// function breakCamelCase(str) {
//   arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toUpperCase() === arr[i]) {
//       arr.splice(i, 0, ' ');
//       i++;
//     }
//   }
//   return arr.join('');
// }
// console.log(breakCamelCase('camelCasing'));

// ------------------- // Make readable time in Hours, Minutes, Seconds

// function humanReadable(seconds) {
//   let newHrs;
//   let newMins;
//   let newSecs;
//   newHrs = Math.floor(seconds / 3600);
//   newMins = Math.floor((seconds - newHrs * 3600) / 60);
//   newSecs = seconds - newHrs * 3600 - newMins * 60;

//   return `${String(newHrs).padStart(2, "0")}:${String(newMins).padStart(2,"0")}:${String(newSecs).padStart(2, "0")}`;
// }

// console.log(humanReadable(32151));

// ------------------- // Rot13 cypher

// function rot13(message) {

//   const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//   let msgArr = [];
//   let cypherIndex = [];
//   let capitalLetters = [];
//   let checkAlphabet = /[a-z]/g;

//   msgArr = message.split('').map((el) => el.toLowerCase());
//   cypherIndex = msgArr.map((el) => {
//     if (alphabet.indexOf(el) + 13 >= alphabet.length) {
//       return alphabet[13 - (alphabet.length - alphabet.indexOf(el))];
//     } else if (!el.match(checkAlphabet)) {
//       return el;
//     } else {
//       return alphabet[alphabet.indexOf(el) + 13];
//     }
//   });

//   capitalLetters = message.split('').map((el, i) => {
//     if (el === el.toUpperCase()) {
//       return i;
//     }
//   });
//   capitalLetters = capitalLetters.filter((el) => el !== undefined);

//   for (let i = 0; i < capitalLetters.length; i++) {
//     cypherIndex[capitalLetters[i]] = cypherIndex[
//       capitalLetters[i]
//     ].toUpperCase();
//   }

//   return cypherIndex.join('');
// }

// -------------------------------- // Array Methods Practice

// const texasss = [
//   {
//     name: 'Mike',
//     age: 23,
//     gender: 'm',
//     us: false,
//   },
//   {
//     name: 'Liz',
//     age: 20,
//     gender: 'f',
//     us: true,
//   },
//   {
//     name: 'Chris',
//     age: 102,
//     gender: 'm',
//     us: true,
//   },
//   {
//     name: 'Chuloo',
//     age: 27,
//     gender: 'm',
//     us: false,
//   },
//   {
//     name: 'Annie',
//     age: 30,
//     gender: 'f',
//     us: true,
//   },
// ]

// // Part 1 - Find all users older than 24
// console.log(texasss.filter((val) => val.age > 24))

// // Part 2 - Find the total age of all users
// console.log(texasss.reduce((acc, curr) => acc + curr.age, 0))

// // Part 3 - List all female coders
// console.log(texasss.filter((val) => val.gender === 'f'))


// // ARRAY 2
// const newieyork = [
//   {
//     name: 'Michelle',
//     age: 19,
//     coder:true,
//     gender: 'f',
//     us: true,
//   },
//   {
//     name: 'Sam',
//     age: 25,
//     coder:false,
//     gender: 'm',
//     us: false,
//   },
//   {
//     name: 'Ivy',
//     age: 26,
//     coder:true,
//     gender: 'f',
//     us: false,
//   },
//   {
//     name: 'Nick',
//     age: 32,
//     coder:true,
//     gender: 'm',
//     us: true,
//   },
//   {
//     name: 'Jim Beglin',
//     age: 65,
//     coder:false,
//     gender: 'm',
//     us: true,
//   },
// ]

// // Part 1 - List all users in US in ascending order
// console.log((newieyork.filter((val) => val.us === true))
//   .sort((a, b) => a.name.localeCompare(b.name)))

// // Part 2 - Sort all users by age
// console.log(newieyork.sort((a, b) => a.age - b.age));

// // Part 3 -  List all female coders
// console.log(newieyork.filter((val) => val.gender === 'f'))

// // ARRAY 3
// const vegzas = [
//   {
//     name: 'Charly',
//     age: 32,
//     coder:true,
//     gender: 'm',
//   },
//   {
//     name: 'Law',
//     age: 21,
//     coder:true,
//     gender: 'm',
//   },
//   {
//     name: 'Rosey',
//     age: 42,
//     coder:false,
//     gender: 'f',
//   },
//   {
//     name: 'Steph',
//     age: 18,
//     coder:true,
//     gender:'f'
//   },
//   {
//     name: 'Jon',
//     age: 47,
//     coder:false,
//     gender: 'm',
//   },
// ]

// // Part 1 - Find the total age of male coders under 25
// console.log(vegzas.filter((val) => val.gender === 'm' && val.age < 25)
//   .reduce((acc, curr) => acc + curr.age, 0))

// // Part 2 - List all male coders over 30
// console.log(vegzas.filter((val) => val.gender === 'm' && val.age > 30))

// // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
// console.log([...texasss, ...newieyork, ...vegzas].reduce((acc, curr) => acc + curr.age, 0))


// -------------------------------- // Merged String Checker

// function isMerge(s, part1, part2) {
//   const charObj = {};
//   s.split('').map((curr, i) => charObj[curr] = i + 1)
//   const partsArray = [part1, part2]
//   let previous;
//   const partsCheckArray = partsArray.map((current) => {
//     previous = 0;
//     return (((current.split('').map((curr) => {
//       if (charObj[curr] > previous) {
//         previous = charObj[curr];
//         return true
//       } else {
//         return false;
//       }
//     })).filter(val => val === false)).length === 0) ? true : false;
//   })
//   if ((partsCheckArray.filter(val => val === false)).length === 0) {
//     sArray = Object.keys(charObj)
//     partsMergedArray = (part1 + part2).split('')
//     if ((sArray.map((curr) => partsMergedArray.indexOf(curr))).find(elem => elem === -1)) {
//       return false;
//     } else if (sArray.length === partsMergedArray.length) {
//       return true;
//     } else return false;
//   } else {
//     return false;
//   };
// }

// console.log(isMerge('codewars', 'cod', 'wars'));


// ------------------------ ERK - DP

// const t1 = performance.now();


// let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
// let wordlist = ['APPLE', 'PLEAS', 'PLEASE']

// const wordsCreated = {};
// let solution = [];

// for (let i = 0, n = keypads.length; i < n; i++) {
//   wordsCreated[keypads[i]] = 0;
// }

// for (let i = 0, n = wordlist.length; i < n; i++) {
//   const wordLetters = {};
//   wordlist[i].split('').forEach(letter => wordLetters[letter] = 1);
//   keypads.filter(pad => wordlist[i].includes(pad[0]))
//   .forEach(pad => {
//       const matchedLetters = {...wordLetters};
//       pad.split('').forEach(char => matchedLetters[char] += 1);
//       Object.values(matchedLetters).includes(1) 
//         ? wordsCreated[pad] += 0 
//         : wordsCreated[pad] += 1
//   });
// };

// for (let i = 0, n = keypads.length; i < n; i++) {
//   solution.push(wordsCreated[keypads[i]]);
// }

// console.log(Object.values(wordsCreated)); 

// const t2 = performance.now();
// console.log(t2 - t1)

// ------------------------ Moving Zeros To The End

// function moveZeros(arr) {
//   let zeroArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1)
//       zeroArr.push(0)
//       i--
//     }
//   }
//   return [...arr, ...zeroArr]
// }

// console.log(moveZeros(["a",0,"b","c","d",1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])); 

// ------------------------ Write Number in Expanded Form

// function expandedForm(num) {
//   let solution = '';
//   let strNum = String(num); 
//   for (let i = 0; i < strNum.length; i++) {
//     let subStr = strNum.substring(i)
//     if (subStr[0] !== '0') {
//       expandNum = subStr[0].padEnd(subStr.length, 0)
//       solution += `${expandNum} + `
//     } 
//   }
//   return solution.slice(0, -3);
// }

// // const expandedForm = n => n.toString()
// //                             .split("")
// //                             .reverse()
// //                             .map( (a, i) => a * Math.pow(10, i))
// //                             .filter(a => a > 0)
// //                             .reverse()
// //                             .join(" + ");

// console.log(expandedForm(70304))

// ------------------------ Sum of Parts

// function partsSums(ls) {
//   ls.unshift(0);
//   let sum = ls.reduce((acc, curr) => acc + curr, 0);
//   return ls.map(value => sum = sum - value);
// }

// console.log(partsSums([0, 1, 3, 6, 10]))

// ------------------------ Scramblies

function scramble(str1, str2) {
  const str1Arr = str1.split('')
  const obj = {}
  const solutionArr1 = []
  const solutionArr2 = []

  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]]) obj[str2[i]] += 1;
    if (!obj[str2[i]]) obj[str2[i]] = 1;
    if (str1Arr.includes(str2[i])) {
      solutionArr1.push(true)
    } else if (!str1Arr.includes(str2[i])) {
      solutionArr1.push(false);
      return false;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]]) {
      let letterArr = str1Arr.filter(val => val === str1[i])
      if (letterArr.length >= obj[str1[i]]) {
        solutionArr2.push(true) 
      } else if (letterArr.length < obj[str1[i]]) {
        solutionArr2.push(false);
        return false;
      }
    }
  }

  if (solutionArr2.includes(false) || solutionArr1.includes(false)) return false;
  if (!solutionArr2.includes(false) && !solutionArr2.includes(false)) return true;
}

console.log(scramble('scriptjava','javascript'))
