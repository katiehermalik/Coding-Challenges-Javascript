// ## Arrays ## //

// ------------------------ // 2D Array 
// 2D Arrays = Matrix = Nested for loops

// function hourglassSum(arr) {
//   let tb = [[0,1,2],[1,2,3],[2,3,4],[3,4,5]];
//   let middle = [1,2,3,4];
//   let maxNum = -Infinity;
//   for (let i = 0; i < arr.length-2; i++) {
//     for (let j = 0; j < tb.length; j++) {
//       let hgSum = 0;
//       hgSum += 
//       arr[i][tb[j][0]] + arr[i][tb[j][1]] + arr[i][tb[j][2]] + 
//       arr[i+1][middle[j]] + 
//       arr[i+2][tb[j][0]] + arr[i+2][tb[j][1]] + arr[i+2][tb[j][2]]
//       if (hgSum > maxNum) maxNum = hgSum;
//     }
//   }
//   return maxNum
// }

// // console.log(hourglassSum([
// //   [1,1,1,0,0,0],
// //   [0,1,0,0,0,0],
// //   [1,1,1,0,0,0],
// //   [0,0,2,4,4,0],
// //   [0,0,0,2,0,0],
// //   [0,0,1,2,4,0]]))
// console.log(hourglassSum([
//   [0,-4,-6,0,-7,-6],
//   [-1,-2,-6,-8,-3,-1],
//   [-8,-4,-2,-8,-8,-6],
//   [-3,-1,-2,-5,-7,-4],
//   [-3,-5,-3,-6,-6,-6],
//   [-3,-6,0,-8,-6,-7]]))


// ------------------------ // Left Rotation 

// /*
//  * Complete the 'rotateLeft' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER d
//  *  2. INTEGER_ARRAY arr
//  */

// function rotateLeft(d, arr) {
//   const shiftedNums = arr.splice(0, d)
//   return [...arr, ...shiftedNums]
// }

// console.log(rotateLeft(2, [1,2,3,4,5]))


// ------------------------ // Sparse Arrays

// function matchingStrings(strings, queries) {
//   const solutionArr = [];
//   for (let i = 0; i < queries.length; i++) {
//     solutionArr.push((strings.filter(str => str === queries[i])).length)
//   }
//   return solutionArr;
// }

// console.log(matchingStrings(['ab','ab','abc'], ['ab','abc','bc']));

// ------------------------ // Array Manipulation
// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

// function arrayManipulation(n, queries) {
//   const originalArr = [];
//   let len = queries.length
//   for (let i = 0; i <= n; i++) originalArr.push(0);
//   for (let i = 0; i < len; i++) {
//     let start = queries[i][0];
//     let end = queries[i][1] + 1;
//     let addend = queries[i][2]
//     originalArr[start] += addend;
//     originalArr[end] -= addend;
//   }
//   console.log(originalArr);
//   let maxNum = 0;
//   originalArr.reduce((acc, curr) => {
//     if (acc > maxNum) maxNum = acc;
//     return acc + curr
//   })
//   return maxNum;
// }

// console.log(arrayManipulation(10,[
//   [2,6,8],
//   [3,5,7],
//   [1,8,1],
//   [5,9,15]
// ]));


// ## Linked Lists ## //

// const list = {
//   head: {
//       value: 6
//       next: {
//           value: 10                                             
//           next: {
//               value: 12
//               next: {
//                   value: 3
//                   next: null	
//                   }
//               }
//           }
//       }
//   }
// };

// Print the elements of a linked list

// function printLinkedList(head) {
//   while (head !== null) {
//     console.log(head.data);
//     head = head.next;
//   }
// }




// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------- //







// Frequency Counter - sameFrequency

// function sameFrequency(num1, num2){
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if(strNum1.length !== strNum2.length) return false;

//     let countNum1 = {};
//     let countNum2 = {};

//     for(let i = 0; i < strNum1.length; i++){
//       countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }

//     for(let j = 0; j < strNum1.length; j++){
//       countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }

//     for(let key in countNum1){
//       if(countNum1[key] !== countNum2[key]) return false;
//     }

//     return true;
// }

// console.log(sameFrequency(234456, 234456));

// areThereDuplicates (Multiple Pointers)

// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }


// areThereDuplicates One Liner Solution

// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// areThereDuplicates(1, 2, 3)
// areThereDuplicates('a', 'b', 'c', 'a')


// // averagePair Solution
// function averagePair(arr, num){
//   let start = 0
//   let end = arr.length-1;
//   while(start < end){
//     let avg = (arr[start]+arr[end]) / 2 
//     if(avg === num) return true;
//     else if(avg < num) start++
//     else end--
//   }
//   return false;
// }
// // isSubsequence Solution - Iterative
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }
// // isSubsequence Solution - Recursive but not O(1) Space
// function isSubsequence(str1, str2) {
//   if(str1.length === 0) return true
//   if(str2.length === 0) return false
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//   return isSubsequence(str1, str2.slice(1))
// }

// function linearSearch(arr, num) {
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] === num) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch([10,15,20,25,30], 14));

// function binarySearch(arr, num){
//     if (num > arr[arr.length - 1] || num < arr[0]) return -1;
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let middle = Math.ceil((left + right)/2);
//         if (arr[middle] === num) return middle;
//         arr[middle] > num ? right = middle - 1 : left = middle + 1;
//     }
//     return -1;
// }
// console.log(binarySearch([1,2,3,4,5], 5));








