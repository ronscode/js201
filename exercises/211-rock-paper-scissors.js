// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors( throwP1, throwP2) {
  if (throwP1 === throwP2) {
    return "draw";
  } else {
    switch (throwP1) {
      case "rock":
        if (throwP2 === "paper") {
          return "player 2"
        } else {
          return "player 1"
        }
        break;
        case "paper":
          if (throwP2 === "scissors") {
            return "player 2"
          } else {
            return "player 1"
          }
          break;
          case "scissors":
            if (throwP2 === "rock") {
              return "player 2"
            } else {
              return "player 1"
            }
            break;
    
      default:
        break;
    }
  }
}

// console.log(rockPaperScissors('rock', 'scissors')) //'player 1'
// console.log(rockPaperScissors('rock', 'paper')) //'player 2'
// console.log(rockPaperScissors('paper', 'paper')) //'draw'