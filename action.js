// Variables and constants initialization
var player_name = prompt('Enter your name.');
var number_of_games = parseInt(prompt('How many games do you want to play? Please enter a number.'));

// ******************* Check data in Console *******************
console.log('GAME INFO');
console.log('Player one is ' + player_name + '.');
console.log('The second player is the computer.');
console.log('You are going to play ' + number_of_games + ' games.')
console.log(' ');

// ******************* Game & Output in Console *******************
console.log('SCORE');
for (i = 0; i < number_of_games; i++) {
  // Match counts
  var match_number = i + 1;
  console.log('*** Match number ' + match_number + ' ***.');
  // Roll of the dice
  var random_number_pc = Math.floor(Math.random() * 6) + 1;
  var random_number_player = Math.floor(Math.random() * 6) + 1;
  // ******** Winner Check ********
  if (random_number_pc > random_number_player) {
    // You lose
    console.log('The winner is the computer! It scored ' + random_number_pc + '.');
    console.log('You scored ' + random_number_player + '.');
    console.log(' ');
  } else if (random_number_pc < random_number_player) {
    // You win
    console.log('You won! ');
    console.log(player_name + ' scored ' + random_number_player + '.');
    console.log('The computer scored ' + random_number_pc + '.');
    console.log(' ');
  } else {
    // No winners
    console.log('There are no winners. You both scored ' + random_number_pc + '!');
    console.log(' ');
  }
}
/*
// ******************* Play again *******************
var play_again = prompt('Do you want to play again? Please enter YES or NO.');
if ()
*/
