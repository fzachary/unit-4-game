// WHEN PAGE LOADS
 // Set the *win counter* and *loss counter* to 0 (variables)

$(document).ready(function() {

// Generate a *target number* (VARIABLE) that the user is supposed to reach. The user must reach this number exactly. If they go over, they lose. Use Math.random to select a random number between 19 and 120.
var targetNumber = Math.floor(Math.random() * 120) + 19;
console.log(targetNumber);

// Print this number to the DOM
$('#goal-number').text(targetNumber);

// Generate a random number for each of the crystal images (divs) that will add to the *player's score* when clicked.
var red = Math.floor(Math.random() * 12) + 1;
var blue = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
// Console.log these variables
console.log(red, blue, yellow, green);

var playerScore = 0;
var wins = 0;
var losses = 0;

$('#win-counter').text(wins);
$('#loss-counter').text(losses);


// DEFINE RESET FUNCTION() FIRST {
function reset() {

    // Reset the targetNumber
    targetNumber = Math.floor(Math.random() * 120) + 19;
    console.log(targetNumber);
    $('#goal-number').text(targetNumber);

    red = Math.floor(Math.random() * 12) + 1;
    blue = Math.floor(Math.random() * 12) + 1;
    yellow = Math.floor(Math.random() * 12) + 1;
    green = Math.floor(Math.random() * 12) + 1;
    console.log(red, blue, yellow, green);

    // Reset *player's score* to 0 (variable for player's score)
    playerScore = 0;

    // Reset the corresponding HTML for *player's score* in the DOM
    $('#current-score').text(playerScore);
}

// If the *player's score* is equal to the *target number* then it is a win. Add 1 to the *win counter* variable. Update this in the DOM and RESET() the game (keeping the new *win counter*)
function win() {
    alert("You Won!");
    wins++;
    $('#win-count').text(wins);
    reset();
}

// If the *player's score* goes above the *target number* then it is a loss. Add 1 to the *loss counter* variable. Update this in the DOM and RESET() the game (keeping the new *win counter*)
function lose() {
    alert("Sorry, you lost.");
    losses++;
    $('#loss-count').text(losses);
    reset();
}

// JQuery that applies the values to their respective images and adds to the *player's score* when clicked
    $('#red').on('click', function() {
    playerScore = playerScore + red;
    console.log("New total " + playerScore);
    $('#current-score').text(playerScore);

    if (playerScore == targetNumber) {
        win();
    }
    else if (playerScore > targetNumber) {
        lose();
    }
    })

    $('#blue').on('click', function() {
    playerScore = playerScore + blue;
    console.log("New total " + playerScore);
    $('#current-score').text(playerScore);

    if (playerScore == targetNumber) {
        win();
    }
    else if (playerScore > targetNumber) {
        lose();
    }
    })

    $('#yellow').on('click', function() {
    playerScore = playerScore + yellow;
    console.log("New total " + playerScore);
    $('#current-score').text(playerScore);

    if (playerScore == targetNumber) {
        win();
    }
    else if (playerScore > targetNumber) {
        lose();
    }
    })

    $('#green').on('click', function() {
    playerScore = playerScore + green;
    console.log("New total " + playerScore);
    $('#current-score').text(playerScore);

    if (playerScore == targetNumber) {
        win();
    }
    else if (playerScore > targetNumber) {
        lose();
    }
    });

});



// function game() {

    

//     // Console.log thess variables
//     console.log(red, blue, yellow, green);
    
//     
    

//     $('#blue').on('click', function () {
//     newScore = blue + playerScore;
//     $('#current-score').text(newScore);    
    
//     })

//     $('#yellow').on('click', function() {
//     newScore = yellow + playerScore;
//     $('#current-score').text(newScore);    
    
//     })

//     $('#green').on('click', function() {
//     newScore = green + playerScore;
//     $('#current-score').text(newScore);    
    
// })};

// // while (playerScore < targetNumber) {
// //     game()
// // }

// if (playerScore === targetNumber) {
//     wins++;
//     $('#win-count').text(wins);
// } else if (playerScore > targetNumber) {
//     losses++;
//     $('#loss-count').text(losses);
// } else {
//     game()
// }

    
//     // DO NOT reset the *win counter* and *loss counter* (both variables that will accrue values as the game is played more

// // }

// // GAME FUNCTION () {

//     // *ON CLICK EVENT FUNCTIONS*
//     // FUNCTION: When user clicks on images, add the assigned amount of points from each to the *player's score* variable + update the HTML with the current *player's score*
//     // COMPARE FUNCTION: If the *player's score* is below the *target number* do nothing but continue to run the game function
//     
//     

