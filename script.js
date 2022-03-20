let win = 0;
let loose = 0;

game()

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber >= 0 && randomNumber <= 32) {
        return("ROCK");
    } else if (randomNumber >= 33 && randomNumber <= 66) {
        return("PAPER");
    } else if (randomNumber >= 67 && randomNumber <= 100) {
        return("SCISSORS");
    }
}

function playerSelection() {
    let userInput = prompt("Choose your weapon");
    let userInputUpperCase = userInput.toUpperCase();
    if (userInputUpperCase == "ROCK" || userInputUpperCase == "PAPER" || userInputUpperCase == "SCISSORS" ) {
        return userInputUpperCase;
    } else {
        alert("Not a weapon")
    }
}

function singleRound() {
    let playerChoice = playerSelection();
    let computerChoice = computerPlay();
    if (playerChoice === computerChoice) {
        console.log("Tie game!");
        console.log("Player score: " + win);
        console.log("Computer score: " + loose);
    } if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You won!");
        win++;
        console.log("Player score: " + win);
        console.log("Computer score: " + loose);
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You won!");
        win++;
        console.log("Player score: " + win);
        console.log("Computer score: " + loose);
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You won!");
        win++;
        console.log("Player score: " + win);
        console.log("Computer score: " + loose);
    } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You lost!");
        loose++;
        console.log("Player score: " + win);
        console.log("Computer score: " + loose);
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        console.log("You lost!");
        loose++;
        console.log("Player score: " + win);
        console.log("Computer score: " + loose);
    } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You lost!");
        loose++;
        console.log("Player score: " + win);
        console.log("Computer score: " + loose);
    } else {
        loose++;
        console.log("Player score: " + win);
        console.log("Computer score: " + loose);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (singleRound()) {
            i++;
        }
    }
    console.log("Win: " + win);
    console.log("Loose: " + loose);
    if (win > loose) {
        alert("You won the game :)")
    } else if (loose > win) {
        alert("You lost the game :(")
    } else {
        alert("Tie game :|")
    }
    return;
}