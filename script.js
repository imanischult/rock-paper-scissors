var submitEl = document.querySelector("#submit");
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors")
var weapons = ["ROCK", "PAPER", "SCISSORS"]

var computerPick = function () {
    var weapon
    var weaponNum = Math.floor((Math.random() * 3));
    weapon = weapons[weaponNum]
    console.log(weapon);
    document.querySelector("#computer-input").innerHTML = weapon
    return weapon;
}

submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (rock.checked === false && paper.checked === false && scissors.checked === false) {
        alert("You must select a weapon!")
    } else if (rock.checked) {
        console.log("Rock")
        // write to HTML saying you have chosen "rock"
        document.querySelector("#user-input").innerHTML = "ROCK"
        // computer picks
        computerPick();
        console.log(computerPick())
        // determine who wins
        // add to respective score
        // check to see if score is equal to 10
        // if no, alert user to pick again
        // if yes, check to see who won
        // tell user who won
        // ask user if they would like to play again
    } else if (paper.checked) {
        console.log("Paper")
        // write to html saying you have chosen "paper"
        // computer picks
        // determine who wins
        // add to respective score
        // check to see if score is equal to 10
        // if no, continue playing
        // if yes, check to see who won
        // tell user who won
        // ask user if they would like to play again
    } else if (scissors.checked) {
        console.log("Scissors")
        // write to html saying you have chose "scissors"
        // computer picks
        // determine who wins
        // add to respective score
        // check to see if score is equal to 10
        // if no, continue playing
        // if yes, check to see who won
        // tell user who won
        // ask user if they would like to play again
    }
});