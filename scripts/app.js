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

// ================================================================================== //

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

findSmallestInt = (args) => {
  console.log(Math.min(...args)) 
}

findSmallestInt([34, -345, -1, 100])

