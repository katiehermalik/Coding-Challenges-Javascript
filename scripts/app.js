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

deleteNth = (arr, n) => {
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (counts[num] === n) {
      arr.splice(i, 1);
      i--;
    } else if (counts[num]) {
      counts[num] += 1
    } else {
      counts[num] = 1
    }
  }
}

deleteNth([1, 2, 3, 1, 1, 2, 2, 3, 3, 2, 4, 5, 1], 3)