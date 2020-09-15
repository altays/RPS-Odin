window.onload = (e) => {
    e.preventDefault();

    // score variables
    let userScore=0;
    let computerScore=0;

    let roundCounter=0;

    // page variables
    let buttonList = document.getElementsByClassName("rps-button");
    let userScoreBox = document.getElementById("user-score");
    let computerScoreBox = document.getElementById("computer-score");
    let winnerDisplay = document.getElementById("winner-display-text")
    let roundCounterText = document.getElementById("round-number-text");

    // adding event listeners to buttons
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener("click",RPS)
    }
    
    function initDisplay() {
        computerScore=0;
        userScore=0;
        roundCounter=0;
        userScoreBox.textContent=userScore;
        computerScoreBox.textContent=computerScore
    }
    
    initDisplay();

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
            winnerDisplay.textContent=`You won this round!`;
        } else if (value === 0) {
            computerScore++
            computerScoreBox.textContent=computerScore;
            winnerDisplay.textContent=`Computer won this round!`
        } else {
            winnerDisplay.textContent=` Tie!`
        }
    }

    function roundManage(number){
        if (number === 5) {
            if (userScore > computerScore) {
                // if user has more points
                // change winner display to "You win! Click another box to restart"
                winnerDisplay.textContent=`You won! Click another box to restart!`;
                roundCounterText.textContent=5;
                // add a class to wallpaper to green
                initDisplay();
            } else if (computerScore > userScore) {
                // if comptuer has more points
                // change winner display to "Computer wins! Click another box to restart"
                winnerDisplay.textContent=`Computer wins! Click another box to restart!`
                roundCounterText.textContent=5;
                roundCounter=0;
                // add a class to wallpaper to red
                initDisplay();
            } else if (computerScore === userScore) {
                winnerDisplay.textContent=`Nobody wins! Click another box to restart!`
                roundCounterText.textContent=5;
                // add a class to wallpaper to red
                roundCounter=0;
                initDisplay();
            }
        } else {
            // set wallpaper class to white
            roundCounterText.textContent=roundCounter;
        }
    }



    // comparing choices
    let roundWinner = compareChoices(userSelect,computerSelect);
    scoring(roundWinner);

    roundCounter++;
    roundManage(roundCounter)

    }
};
