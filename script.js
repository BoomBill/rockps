let win = 0;
let loose = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber >= 0 && randomNumber <= 32) {
        console.log("ROCK");
        return("ROCK");
    } else if (randomNumber >= 33 && randomNumber <= 66) {
        console.log("PAPER");
        return("PAPER");
    } else if (randomNumber >= 67 && randomNumber <= 100) {
        console.log("SCISSORS");
        return("SCISSORS");
    }
}

function playerSelection() {
    let userInput = prompt("Choose your weapon");
    let userInputUpperCase = userInput.toUpperCase();
    if (userInputUpperCase == "ROCK" || userInputUpperCase == "PAPER" || userInputUpperCase == "SCISSORS" ) {
        console.log(userInputUpperCase)
        return userInputUpperCase;
    } else {
        alert("Error not a weapon");
        return;
    }
}

function singleRound() {
    let playerChoice = playerSelection();
    let computerChoice = computerPlay();
    if (playerChoice === computerChoice) {
        console.log("Tie game!")
    } if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You won!")
        win++;
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        console.log("You won!")
        win++;
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You won!")
        win++;
    } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You loose!")
        loose++;
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        console.log("You loose!")
        loose++;
    } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You loose!")
        loose++;
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
        console.log("You won the game :)")
    } else if (loose > win) {
        console.log("You loost the game :(")
    } else {
        console.log("Tie game :|")
    }
}