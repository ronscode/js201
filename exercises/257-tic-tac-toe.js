// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null

function ticTacToe(someArray) {
  let winningScores = [3,12,21,9,15];
  let winner = "null";
  let xScore = 0;
  let oScore = 0;
  let scoreArray = [];

  // create one array out of all 3 

  for (eachArray of someArray) {
    for (item of eachArray) {
      scoreArray.push(item);
    }
  }

  // check each item in the array and calculate a score based on each square

  for (let i = 0; i < scoreArray.length; i++) {
    
    if (scoreArray[i] === "X") {
        xScore += i
      }
     else if (scoreArray[i] === "O") {
      {
        oScore += i
      }
  }
}
 if (winningScores.includes(xScore)) {
   return "X";
 } else if (winningScores.includes(oScore)) {
   return "O"
 } else {
   return winner;
 }

}
// console.log(ticTacToe([['O', 'X', 'O'],['O', 'X', null],[null, 'X', null]]))
// console.log(ticTacToe([
//     ['O', 'X', 'O'],
//     ['O', 'O', null],
//     [null, 'X', 'X']
//     ]))
console.log(ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null]
    ])
  )
 // [3,12,21,9,15]
// across: 3, 12,21
// down: 9, 12,15
// diag: 12, 12
  // [0] [1] [2]
// [3] [4] [5]
// [6] [7] [8]
// wining #'s: 6, 15, 24, 12, 18
// winning #'s across : 6, 15, 24
// winning #'s down:   12, 15, 18
// winning #'s diagnal: 15, 15


// [1] [2] [3]
// [4] [5] [6]
// [7] [8] [9]
// wining #'s: 6, 15, 24, 12, 18
// winning #'s across : 6, 15, 24
// winning #'s down:   12, 15, 18
// winning #'s diagnal: 15, 15