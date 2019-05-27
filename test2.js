// 왼쪽 대각선
// const bingo = function (arr) {
//   return arr.every(function (item, index) {
//     return item[index] === 1;
//   });
// }

// 오른쪽 대각선
const bingo = function (arr) {
  return arr.every(function (item, index) {
    console.log(item[item.length - index - 1]);
    return item[item.length - index - 1] === 1;
  });
}

// 가로
// let count = 0;
// const bingo = function (arr) {
//   arr.forEach(function (item) {
//     count += item.every(function (item) {
//       return item === 1;
//     });
//   });
//   return count;
// }


// const arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// const bingo = function (arr) {
//   let bingo = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[j][i] === 1) {
//         count += 1;
//       }
//     }
//     if (count === 3) {
//       bingo += 1;
//     }
//   }
//   return bingo === 0 ? 'No bingo!' : `${bingo}bingo!`;
// }
console.log(bingo([
  [0, 1, 1],
  [0, 1, 1],
  [1, 0, 1]
])); // -> false

console.log(bingo([
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
])); // -> true

console.log(bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 1, 1]
])); // -> true

console.log(bingo([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
])); // -> true