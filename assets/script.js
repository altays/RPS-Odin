window.onload = (e) => {
    e.preventDefault();

    // score variables
    let userScore=0;
    let computerScore=0;

    // page variables
    let buttonList = document.getElementsByTagName("button");
    let userScoreBox = document.getElementById("user-score");
    let computerScoreBox = document.getElementById("computer-score");
    let winnerDisplay = document.getElementById("winner-display-text")

    // adding event listeners to buttons
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener("click",RPS)
    }
    
    function RPS(event) {
        event.preventDefault()

        const choices = ["r","p","s"]

        let computerSelect = choices[Math.floor(Math.random()*3)];
        let userSelect = event.target.dataset.symbol;

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
            userScoreBox.textContent=userScore;
            winnerDisplay.textContent=`You won!`;
        } else if (value === 0) {
            computerScore++
            computerScoreBox.textContent=computerScore;
            winnerDisplay.textContent=`Computer Won!`
        } else {
            winnerDisplay.textContent=` Tie!`
        }
    }

    // comparing choices
    let roundWinner = compareChoices(userSelect,computerSelect)

    scoring(roundWinner);

    }


};
