let animateImage = function(event) {
    event.preventDefault();
    event.target.classList.remove('animate');
    event.target.classList.add('animate');
    setTimeout(function() {
        event.target.classList.remove('animate');
    }, 700);
}

let bubblyImages = document.getElementsByClassName("img-card");

for (var i = 0; i <bubblyImages.length; i++) {
    bubblyImages[i].addEventListener('click', animateImage, true);
}

// Page load function
$(document).ready(function() {

    // Generate a target number for the user to reach. It must be reached exactly. If the user goes over, they lose. 
    // Use Math.random to select a random number between 19 and 120.
    let targetNumber = Math.floor(Math.random() * 120) + 19;

    // Print this number to the DOM
    $('#target-number').text(targetNumber);

    // Generate a random value for each of the crystal images that will add to the player's score when clicked.
    let red = Math.floor(Math.random() * 12) + 1;
    let blue = Math.floor(Math.random() * 12) + 1;
    let yellow = Math.floor(Math.random() * 12) + 1;
    let green = Math.floor(Math.random() * 12) + 1;

    // Initialize the user's score, win total, and loss total
    let playerScore = 0;
    let wins = 0;
    let losses = 0;

    // Show the win and loss totals
    $('#win-counter').text(wins);
    $('#loss-counter').text(losses);

    // Reset function
    function reset() {

        // Reset the targetNumber
        targetNumber = Math.floor(Math.random() * 120) + 19;
        $('#target-number').text(targetNumber);

        // Reset the crystal image values
        red = Math.floor(Math.random() * 12) + 1;
        blue = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        green = Math.floor(Math.random() * 12) + 1;

        // Reset player's score to 0
        playerScore = 0;

        // Reset the corresponding HTML for player's score in the DOM
        $('#score').text(playerScore);
    }

    // If the player's score === target number then it is a win. Add 1 to the win counter variable. Update this in the DOM and reset the game (keeping the new win counter)
    function win() {
        alert("You Won!");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    // If the *player's score* goes above the *target number* then it is a loss. Add 1 to the *loss counter* variable. Update this in the DOM and RESET() the game (keeping the new *win counter*)
    function lose() {
        alert("Sorry, you lost.");
        losses++;
        $('#losses').text(losses);
        reset();
    }

    // JQuery that applies the values to their respective images and adds to the *player's score* when clicked
    $('#red').on('click', function() {
        playerScore = playerScore + red;
        $('#score').text(playerScore);
        if (playerScore == targetNumber) {
            win();
        }
        else if (playerScore > targetNumber) {
            lose();
        }
    })

    $('#blue').on('click', function() {
        playerScore = playerScore + blue;
        $('#score').text(playerScore);
        if (playerScore == targetNumber) {
            win();
        }
        else if (playerScore > targetNumber) {
            lose();
        }
    })

    $('#yellow').on('click', function() {
        playerScore = playerScore + yellow;
        $('#score').text(playerScore);
        if (playerScore == targetNumber) {
            win();
        }
        else if (playerScore > targetNumber) {
            lose();
        }
    })

    $('#green').on('click', function() {
        playerScore = playerScore + green;
        $('#score').text(playerScore);
        if (playerScore == targetNumber) {
            win();
        }
        else if (playerScore > targetNumber) {
            lose();
        }
    });
});
