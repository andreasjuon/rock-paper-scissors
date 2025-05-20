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

/* Define function to ask and return the human's choice */
function getHumanChoice() {
    return prompt("What do you choose buddy? Choose from either: rock, paper, scissors.");
}

/* Define function to play the game */
function playGame(numberGamesToPlay) {
    /* Define score variables which we will update across the games. */
    let HumanScore = 0;
    let computerScore = 0;

    /* Define function to play one round*/
    function playRound(humanChoice, computerChoice) {
        /* Make human choice lower case. */
        humanChoice = humanChoice.toLowerCase();
        /* Ignore invalid choices */
        if (humanChoice !== "rock" & humanChoice !== "paper" & humanChoice !== "scissors") {
            return "You dumbass! Choose from either: rock, paper, scissors. Game ignored."
        }
        /* Define draws */
        else if (humanChoice === computerChoice) {
            return "You both chose the same buddy!"
        }
        /* Define player wins */
        else if (   (humanChoice == "rock" && computerChoice == "scissors") ||
                    (humanChoice == "scissors" && computerChoice == "paper") ||
                    (humanChoice == "paper" && computerChoice == "rock")
                ) {
                    HumanScore += 1;
                    return "You win, buddy!"
                }
        else {
            computerScore += 1;
            return "You lose, buddy!"
        }
    }

    /* Play as many rounds as specified. */
    for (let i = 0; i < numberGamesToPlay; i++) {
        console.log("Ok, budy, are you ready? This is round " + i + ".")
        const humanInput = getHumanChoice();
        const computerInput = getComputerChoice();
        console.log(playRound(humanInput, computerInput));
}

console.log("Your score is: " + HumanScore + "! The computer's score is: " + computerScore + "!")

let scoreDifference = HumanScore - computerScore;
if (scoreDifference == 0) { console.log("Your scores are equal. Not bad, but also certainly not good."); } else
if (scoreDifference < 0) { console.log("You lost. Shame on you."); } else
if (scoreDifference > 0) { console.log("You won, but I am not very impressed as it was only against a stupid computer."); } else
{ console.log("You did not play any game! Huh! Hahaha! You are a dumbass."); };

}

userChoseNoGames = prompt("How many games you want to play, duuude?")
playGame(userChoseNoGames)
