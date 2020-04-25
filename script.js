var submitEl = document.querySelector("#submit");
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var weapons = ["ROCK", "PAPER", "SCISSORS"];
var userScore = 0;
var compScore = 0;

var computerPick = function () {
    var weapon
    var weaponNum = Math.floor((Math.random() * 3));
    weapon = weapons[weaponNum]
    console.log(weapon);
    document.querySelector("#computer-input").innerHTML = weapon
    return weapon;
};

var pointCheck = function (user, computer) {
    if (user < 10 && computer < 10) {
        document.getElementById("choose").innerHTML = "Pick again!";
    } else if (computer === 10) {
        document.getElementById("win-lose").innerHTML = "You lost the game!";
        displayRestart();
    } else if (user === 10) {
        document.getElementById("win-lose").innerHTML = "You won the game!";
        displayRestart()
    };
};

var restart = function () {
    hideRestart();
    document.getElementById("choose").innerHTML = "";
    document.getElementById("user-input").style.display = "none";
    document.getElementById("computer-input").style.display = "none";
    userScore = 0;
    compScore = 0;
}

var goodGame = function () {
    hideRestart();
    document.getElementById("choose").innerHTML = "";
    document.getElementById("user-weapon").style.display = "none";
    document.getElementById("computer-weapon").style.display = "none";
    document.getElementById("win-lose").innerHTML = "Good Game!"
    document.getElementById("user-final").innerHTML = "Your Final Score: " + userScore;
    document.getElementById("comp-final").innerHTML = "Computer's Final Score: " + compScore;
}

var userWonRound = function () {
    document.getElementById("win-lose").innerHTML = "You won this round!"
    document.querySelector("#user-points").innerHTML = userScore
    document.querySelector("#computer-points").innerHTML = compScore
};

var compWonRound = function () {
    document.getElementById("win-lose").innerHTML = "You lost this round!"
    document.querySelector("#user-points").innerHTML = userScore
    document.querySelector("#computer-points").innerHTML = compScore
};

var hideRestart = function () {
    document.getElementById("restart").style.display = "none"
}

var displayRestart = function () {
    document.getElementById("restart").style.display = "block"
    document.getElementById("")
}

var gameLogic = function (compChoice) {
    if (compChoice === "ROCK" && rock.checked || compChoice === "PAPER" && paper.checked || compChoice === "SCISSORS" && scissors.checked) {
        document.getElementById("win-lose").innerHTML = "It's a tie!"
    } else if (compChoice === "ROCK" && paper.checked) {
        userScore++;
        userWonRound();
        pointCheck(userScore, compScore);
    } else if (compChoice === "ROCK" && scissors.checked) {
        compScore++;
        compWonRound();
        pointCheck(userScore, compScore);
    } else if (compChoice === "PAPER" && rock.checked) {
        compScore++
        compWonRound();
        pointCheck(userScore, compScore);
    } else if (compChoice === "PAPER" && scissors.checked) {
        userScore++;
        userWonRound();
        pointCheck(userScore, compScore);
    } else if (compChoice === "SCISSORS" && rock.checked) {
        userScore++;
        userWonRound();
        pointCheck(userScore, compScore);
    } else if (compChoice === "SCISSORS" && paper.checked) {
        compScore++;
        compWonRound();
        pointCheck(userScore, compScore);
    };
}

hideRestart();

submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (rock.checked === false && paper.checked === false && scissors.checked === false) {
        alert("You must select a weapon!")
    } else if (rock.checked) {
        console.log("Rock")
        // write to HTML saying you have chosen "rock"
        document.querySelector("#user-input").innerHTML = "ROCK"
        // computer picks
        var compPick = computerPick();
        // determine who wins
        gameLogic(compPick);
        // add to respective score
        // check to see if score is equal to 10
        // if no, alert user to pick again
        // if yes, check to see who won
        // tell user who won
        // ask user if they would like to play again
    } else if (paper.checked) {
        console.log("Paper")
        // write to HTML saying you have chosen "paper"
        document.querySelector("#user-input").innerHTML = "PAPER"
        // computer picks
        var compPick = computerPick();
        // determine who wins
        gameLogic(compPick);
    } else if (scissors.checked) {
        console.log("Scissors")
        // write to HTML saying you have chosen "scissors"
        document.querySelector("#user-input").innerHTML = "SCISSORS"
        // computer picks
        var compPick = computerPick();
        // determine who wins
        gameLogic(compPick);
    }
});