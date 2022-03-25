let playButton = document.getElementById("playButton");
playButton.addEventListener("click", play);

function play(event) {
    console.log (event);
    let yourTurn = document.getElementById("selection").value;
    document.getElementById("yourChoice").innerHTML = yourTurn;

    let randomNumber = (Math.floor(Math.random() * (3 - 1 + 1))) + 1;
    console.log (randomNumber);

    let computerChoice;
    if (randomNumber == 1){
        computerChoice = "Stone";
    } else if(randomNumber == 2){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    document.getElementById("computerChoice").innerHTML = computerChoice;

    if ((computerChoice == "Stone" && yourTurn == "Scissors") ||
    (computerChoice == "Paper" && yourTurn == "Stone") ||
    (computerChoice == "Scissors" && yourTurn == "Paper")) {

        document.getElementById("result").innerHTML = "You lose";

    } else if ((yourTurn == "Stone" && computerChoice == "Scissors") ||
    (yourTurn == "Paper" && computerChoice == "Stone") ||
    (yourTurn == "Scissors" && computerChoice == "Paper")) {

        document.getElementById("result").innerHTML = "You win!";

    } else if ((yourTurn == "Stone" && computerChoice == "Stone") ||
    (yourTurn == "Paper" && computerChoice == "Paper") ||
    (yourTurn == "Scissors" && computerChoice == "Scissors")){

        document.getElementById("result").innerHTML = "Draw, play again!";

    }
}

