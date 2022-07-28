//////////////////////////////////////////////////////////////////////////////////
/////////////// Naive/Brute Force Search - substring search - O(n^2) /////////////
//////////////////////////////////////////////////////////////////////////////////

// function naiveStringSearch(long, pattern) {
//     var count = 0;
//     for (let i = 0; i < long.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (pattern[j] !== long[i+j]) break;
//             if (j === pattern.length - 1) count++;
//         }
//     }
//     return count;
// }
// naiveStringSearch("lorie loled", "lol");

//////////////////////////////////////////////////////////////////////////////////
/////////////// KMP Search - substring search - O(m +n) //////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// function kmpStringSearching(str, substr) {
// //initialize an array with the number of characters that can be skipped after a mismatch
//     const lpsArr = initializeLpsArr(substr);

//     const m = substr.length;
//     const n = str.length;
//     let i = 0;
//     let j = 0;

//     while (i < m && j < n) {
//         // If it makes it to the last character in the substr that means all the     previous characters match, so at this point you can assume substr was found in str.
//         if (substr[i] === str[j] && i === m - 1) return true;
//         else if (substr[i] === str[j]) { // If characters match, then proceed...
//             i++;
//             j++;
//         } else { // If characters don't match, then backtrack...
//             if (i !== 0) i = lpsArr[i - 1];
//             else j++;
//         }
//     }
//     return false;
// }
// console.log(kmpStringSearching("cabcbbb", "cabca"));

// function initializeLpsArr(substr) {
//     const m = substr.length;
//     let i = 0;
//     let j = 1;
//     let lpsArr = [0]; // No proper prefix for string of length 1

//     while (j < m) {
//         if (substr[i] === substr[j]) {
//             i++;
//             lpsArr[j] = i;
//             j++;
//         } else if (i === 0) { // If the first character didn't match
//             lpsArr[j] = 0;
//             j++;
//         } else { // Mismatch after at least one matching character
//             i = arr[i - 1];
//         }
//     }
//     return lpsArr;
// }