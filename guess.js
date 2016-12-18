var guess_input;
var finished = false;
var guesses = 0;
var answers = ["ROCK", "SCISSORS", "PAPER"];
var random_id;
var controler = false;

function do_game() {
    while (!controler) {
        var answer_id = Math.floor(Math.random() * 3);
        var answer = answers[answer_id];
        while (!finished) {
            alert("Let's play a game!");
            guess_input = prompt("ROCK, PAPER, SCISSORS!!!");
            guess_input = guess_input.toUpperCase();
            
            if (answer === "ROCK") {
                if (guess_input === "ROCK") {
                    alert("Try again!");
                    alert("The computer was : " + answer);
                    break;
                }
                if (guess_input === "PAPER") {
                    alert("You win!");
                    controler = true;
                    break;
                }
                if (guess_input === "SCISSORS") {
                    alert("You lose!");
                    alert("The computer was : " + answer);
                    break;
                }
            }
            if (answer === "PAPER") {
                if (guess_input === "PAPER") {
                    alert("Try again");
                    alert("The computer was : " + answer);
                    break;
                }
                if (guess_input === "SCISSORS") {
                    alert("You win!");
                    controler = true;
                    break;
                }
                if (guess_input === "ROCK") {
                    alert("You lose!");
                    alert("The computer was : " + answer);
                    break;
                }
            }
            if (answer === "SCISSORS") {
                if (guess_input === "SCISSORS") {
                    alert("Try again");
                    alert("The computer was : " + answer);
                    break;
                }
                if (guess_input === "ROCK") {
                    alert("You win");
                    controler = true;
                    break;
                }
                if (guess_input === "PAPER") {
                    alert("You lose!");
                    alert("The computer was : " + answer);
                    break;
                }
            }
            if (guess_input === "DONE") {
                alert("Game is over !");
                controler = true;
                break;
            }
            if (!guess_input) {
                alert("Incorrect Input ! Please type again.");
                break;
            }
        }
    }
    //    location.href = "index.html";
    window.open("index.html", "_self");
}
do_game();