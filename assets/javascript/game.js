// WHEN PAGE LOADS
 // Set the *win counter* and *loss counter* to 0 (variables)

$(document).ready();


// DEFINE RESET FUNCTION() FIRST {
function reset() {
    
    // Reset *player's score* to 0 (variable for player's score)
    var playerScore = 0;

    // Reset the corresponding HTML for *player's score* in the DOM
    $('#current-score').html(playerScore);

    // Generate a *target number* (VARIABLE) that the user is supposed to reach. The user must reach this number exactly. If they go over, they lose. Use Math.random to select a random number between 19 and 120.
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    
    // Console.log this number to check if working
    console.log(targetNumber);

    // Print this number to the DOM
    $('#goal-number').text(targetNumber);

}

// Run the RESET FUNCTION()
reset()



function game() {

    // Generate a random number for each of the crystal images (divs) that will add to the *player's score* when clicked.
    var red = Math.floor(Math.random() * 12) + 1;
    var blue = Math.floor(Math.random() * 12) + 1;
    var yellow = Math.floor(Math.random() * 12) + 1;
    var green = Math.floor(Math.random() * 12) + 1;

    // Console.log thess variables
    console.log(red, blue, yellow, green);

}

game()




   
    


    
    
    
    
    
    // Console.log these numbers to check if working.
    // JQuery that applies the values to their respective images and adds to the *player's score* when clicked
    // DO NOT reset the *win counter* and *loss counter* (both variables that will accrue values as the game is played more

// }

// GAME FUNCTION () {

    // *ON CLICK EVENT FUNCTIONS*
    // FUNCTION: When user clicks on images, add the assigned amount of points from each to the *player's score* variable + update the HTML with the current *player's score*
    // COMPARE FUNCTION: If the *player's score* is below the *target number* do nothing but continue to run the game function
    // If the *player's score* is above the *target number* then it is a loss. Add 1 to the *loss counter* variable. Update this in the DOM and RESET() the game (keeping the new *win counter*)
    // If the *player's score* is equal to the *target number* then it is a win. Add 1 to the *win counter* variable. Update this in the DOM and RESET() the game (keeping the new *win counter*)

