var player;
var playerScore = 0;
var random;
var randomScore = 0;

var choices = ["stone", "paper", "scissor"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.jpg">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "images/"+choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    player = this.id;
    document.getElementById("player").src = "images/"+player + "2.png";
    
    //random for oppponent
    random = choices[Math.floor(Math.random() * 3)]; 
    document.getElementById("random").src = "images/"+random + "1.png";

    //check for winner
    if (player == random) {
        playerScore += 1;
        randomScore += 1;
        document.getElementById("result").innerHTML= "Draw &#128515&#128517";
    }
    else {
        if (player == "stone") {
            if (random == "scissor") {
                playerScore += 1;
                document.getElementById("result").innerHTML= "You win!! &#128515&#128517";
            }
            else if (random == "paper") {
                randomScore += 1;
                document.getElementById("result").innerHTML= "Oops You lost &#128546";
            }
        }
        else if (player == "scissor") {
            if (random == "paper") {
                playerScore += 1;
                document.getElementById("result").innerHTML= "You win!! &#128515&#128517";
            }
            else if (random == "stone") {
                randomScore += 1;
                document.getElementById("result").innerHTML= "Oops You lost &#128546";
            }
        }
        else if (player == "paper") {
            if (random == "stone") {
                playerScore += 1;
                document.getElementById("result").innerHTML= "You win!! &#128515&#128517";
            }
            else if (random == "scissor") {
                randomScore += 1;
                document.getElementById("result").innerHTML= "Oops You lost &#128546";
            }
        }
    }

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("random-score").innerText = randomScore;
}