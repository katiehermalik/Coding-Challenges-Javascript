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

function highAndLow(numbers){
  numSet = numbers.split(' ').map(Number);
  console.log(Math.max(...numSet) + ' ' + Math.min(...numSet));
}
highAndLow('3 9 45 2 5');
