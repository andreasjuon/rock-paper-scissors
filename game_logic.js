let choiceMenu = document.querySelector("#choiceMenu");
let currentRound = document.querySelector("#currentRound p")

/* Initialize scores */
let humanScore = 0
let computerScore = 0

/* Ask how many games user wants to play */
numberGamesToPlay = prompt("How many games do you want to play? Insert a number.", 5)

/* Define function to return a random computer choice */
function getComputerChoice() {
    randomNumber = Math.random()
    if (randomNumber < 1/3) {
        return "rock"
    }
    else if (randomNumber < 2/3) {
        return "paper"
    }
    return "scissors"
}

/* Define function to play one round*/
function playRound(humanChoice, computerChoice) {
    /* Define draws */
    if (humanChoice === computerChoice) {
        return "This is a draw!"
    }
    /* Define user wins */
    else if (   (humanChoice == "rock" && computerChoice == "scissors") ||
                (humanChoice == "scissors" && computerChoice == "paper") ||
                (humanChoice == "paper" && computerChoice == "rock")
            ) {
                humanScore += 1
                return "Human wins this round!"
            }
    else {
        computerScore += 1
        return "Computer wins this round!"
    }
}

/* Play game if there is a user selection */
choiceMenu.addEventListener("click", function(event){
    /* play round with human choice as input and random computer choice */
    let choice = event.target.id;
    computerChoice = getComputerChoice()
    result = playRound(humanChoice = choice, computerChoice = computerChoice);
    /* Summarize this round verbally */
    currentRound.textContent = "You played a round. " + "Your choice was: " + humanChoice + ". The computer's choice was: " + computerChoice + ". " + result
    /* update scoreboard */
    document.querySelector("#humanScore").textContent = "Human score: " + humanScore;
    document.querySelector("#computerScore").textContent = "Computer score: " + computerScore;

    // Check for winner and end game if above selected number
    if (humanScore == numberGamesToPlay | computerScore == numberGamesToPlay) {
      let message = humanScore == numberGamesToPlay 
        ? "🎉 You won the game!" 
        : "💻 Computer wins the game!";
    currentRound.textContent = message;
    }
})


