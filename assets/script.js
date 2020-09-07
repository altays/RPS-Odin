// initially play from console

// score variables
let userScore=0;
let computerScore=0;

// choices
let choices = ["r","p","s"]

// round start / loop

let roundRun = true;

while (roundRun === true) {
    // helper function for comparing user and computer choices
    function compareChoices(userChoice,computerChoice) {
        // return 1 if user wins, -1 if computer wins, 0 if tie
        if (userChoice === "r") {
            switch(computerChoice) {
                case 'r':
                    return 0;
                    break;
                case 'p':
                    return -1;
                    break;
                case 's':
                    return 1;
                    break;
            }
        } else if (userChoice === "p") {
            switch(computerChoice) {
                case 'r':
                    return 1;
                    break;
                case 'p':
                    return 0;
                    break;
                case 's':
                    return -1;
                    break;
            }
        } else {
            switch(computerChoice) {
                case 'r':
                    return -1;
                    break;
                case 'p':
                    return 1;
                    break;
                case 's':
                    return 0;
                    break;
            }
        }
    }

    function scoring(value) {
        if (value === 1) {
            userScore++;
            console.log("You won!")
            console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
        } else if (value === 0) {
            console.log("Tie!")
            console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
        } else {
            computerScore++;
            console.log("Computer wins!")
            console.log(`Your score is ${userScore} and the computer's score is ${computerScore}`)
        }
    }

    // user and computer selection
    let computerSelect = choices[Math.floor(Math.random()*3)];

    let userSelect = prompt("select r, p, or s")

    console.log(`User selection is ${userSelect} and computer selection is ${computerSelect}`)

    // comparing choices
    let roundWinner = compareChoices(userSelect,computerSelect)

    scoring(roundWinner);

    roundRun = confirm("Do you want to play another round?");
}