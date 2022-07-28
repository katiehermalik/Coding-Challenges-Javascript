//////////////////////////////////////////////////////////////////////////////////
/////////////// Bubble Sort - O(n^2) /////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// const bubbleSort = (arr) => {
//   // Check to see if any swaps were made in the last loop through
//   let noSwaps;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         noSwaps = false;
//       } 
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }
// console.log(bubbleSort([4,16,2,50,34,72,27,19,44,63]));

//////////////////////////////////////////////////////////////////////////////////
/////////////// Selection Sort - O(n log n) //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let indexOfMinVal = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexOfMinVal]) {
//         indexOfMinVal = j;
//       } 
//     }
//     if (arr[i] !== arr[indexOfMinVal]) {
//       [arr[i], arr[indexOfMinVal]] = [arr[indexOfMinVal], arr[i]];
//     }
//   }
//   return arr;
// }
// console.log(selectionSort([4,16,2,50,19,72,27,19,34,44,63]));

//////////////////////////////////////////////////////////////////////////////////
/////////////// Insertion Sort - O(n^2) //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// const insertionSort = (arr) => {
//   // Can't compare first number to any sorted portion yet, so start at 1, not 0.
//   for (let i = 1; i < arr.length; i++) { 
//     let currentVal = arr[i]; 
//     // If the inner loop gets down to the first number or gets down to a number that currentValue is greater than, then loop ends
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] > currentVal) {
//         arr[j + 1] = arr[j]; 
//         if (j === 0) arr[j] = currentVal;
//       } 
//       else {
//         // Once inner loop finds a value that the currentVal is not less than, then current value is inserted in the spot above that number and we break out of j and move to the next currentVal.
//         arr[j + 1] = currentVal;
//         break;
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort([2,1,9,76,7]));

//////////////////////////////////////////////////////////////////////////////////
/////////////// Merge Sort - O(n log n) //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// const mergeHelper = (arrI, arrJ) => {
//   let resultArr = [];
//   let i = 0;
//   let j = 0;
//   while (i < arrI.length && j < arrJ.length) {
//     if (arrI[i] < arrJ[j]) {
//       resultArr.push(arrI[i]);
//       i++;
//     } else {
//       resultArr.push(arrJ[j]);
//       j++;
//     } 
//   }
//   while (i < arrI.length) {
//     resultArr.push(arrI[i]);
//     i++;
//   }
//   while (j < arrJ.length) {
//     resultArr.push(arrJ[j]);
//     j++;
//   }
//   return resultArr;
// }

// const sortArray = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length/2);
//   let left = sortArray(arr.slice(0,mid));
//   let right = sortArray(arr.slice(mid));
//   return mergeHelper(left, right);
// }

// console.log(sortArray([10,24,73,76]));
// //[100,4,5,30,55,22,99,1,3,4,5,73,82,15,11,44]

//////////////////////////////////////////////////////////////////////////////////
/////////////// Quick Sort - O(n log n) //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// const pivotHelper = (arr, start = 0, end = arr.length + 1) => {
//   let pivot = arr[start];
//   let indexOfPivot = start;
//   for (let i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       indexOfPivot++;
//       [arr[i], arr[indexOfPivot]] = [arr[indexOfPivot], arr[i]];
//     }
//   }
//   [arr[start], arr[indexOfPivot]] = [arr[indexOfPivot], arr[start]]
//   return indexOfPivot;
// }

// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//   if (left < right) {
//     let previousPivot = pivotHelper(arr, left, right);
//     quickSort(arr, left, previousPivot - 1);
//     quickSort(arr, previousPivot + 1, right);
//   }
//   return arr;
// }

// console.log(quickSort([4,8,2,1,5,7,6,3]));

////////////////////////////////////////////////////////////////////////////////
///////////// Radix Sort - O(n log n) //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// const getDigitHelper = (num, i) => {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// const digitCountHelper = (num) => {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// const mostDigitsHelper = (nums) => {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCountHelper(nums[i]));
//   }
//   return maxDigits;
// }

// const radixSort = (nums) => {
//   let maxDigitCount = mostDigitsHelper(nums);
//   for (let k = 0; k < maxDigitCount; k++) {
//     let digitBuckets = Array.from({length: 10}, () => []);
//     for (let j = 0; j < nums.length; j++) {
//       let digit = getDigitHelper(nums[j], k);
//       digitBuckets[digit].push(nums[j]);
//     }
//     nums = [].concat(...digitBuckets)
//   }
//   return nums;
// }

// console.log(radixSort([23,345,5467,12,2345,9852]));