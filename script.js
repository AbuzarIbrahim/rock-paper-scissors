
let computerScore = 0;
let userScore = 0;
let total = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerSign() {
  const computerMove = getRandomInt(3);
  if (computerMove === 0) {
    return "stone";
  } else if (computerMove === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const usersignButton = document.querySelector("#usersign");
const log = document.querySelector("#log");

usersignButton.addEventListener("click", () => {
  if (total >= 5) {
    log.innerText = `Game Over!\nFinal Score:\nYou: ${userScore}\nComputer: ${computerScore}\n${userScore > computerScore ? "You won the game!" : userScore < computerScore ? "Computer won the game!" : "It's a tie!"}`;
    return;
  }

  let sign = prompt("Enter stone, paper, or scissors:");
  let usersign = "";
  let result = "";

  if (sign === "stone" || sign === "paper" || sign === "scissors") {
    usersign = sign;
    const computersign = getComputerSign();
    
    if (usersign === computersign) {
      result = "It's a tie!";
    } else if (
      (usersign === "stone" && computersign === "scissors") ||
      (usersign === "paper" && computersign === "stone") ||
      (usersign === "scissors" && computersign === "paper")
    ) {
      result = "You win!";
      userScore++;
    } else {
      result = "Computer wins!";
      computerScore++;
    }
    
    total++;
    log.innerText = `Round ${total}/5\nYour move: ${usersign}\nComputer's move: ${computersign}\n${result}\nScore:\nYou: ${userScore}\nComputer: ${computerScore}`;
  } else {
    log.innerText = "Invalid input! Please enter stone, paper, or scissors.";
  }
});
