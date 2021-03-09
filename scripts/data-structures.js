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

function arrayManipulation(n, queries) {
  const originalArr = [];
  let len = queries.length
  for (let i = 0; i <= n; i++) originalArr.push(0);
  for (let i = 0; i < len; i++) {
    let start = queries[i][0];
    let end = queries[i][1] + 1;
    let addend = queries[i][2]
    originalArr[start] += addend;
    originalArr[end] -= addend;
  }
  console.log(originalArr);
  let maxNum = 0;
  originalArr.reduce((acc, curr) => {
    if (acc > maxNum) maxNum = acc;
    return acc + curr
  })
  return maxNum;
}

console.log(arrayManipulation(10,[
  [2,6,8],
  [3,5,7],
  [1,8,1],
  [5,9,15]
]));


