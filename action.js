// Variables and constants initialization
var random_number_pc = Math.floor(Math.random() * 6) + 1;
var random_number_player1 = Math.floor(Math.random() * 6) + 1;
var player1_name = prompt('Enter the name of player one.');

// ******************* Output in Console *******************
console.log('The computer\'s random number is ' + random_number_pc + '.');
console.log(player1_name +'\'s number is ' + random_number_player1 + '.');

// ******************* Winner Check *******************
if (random_number_pc > random_number_player1) {
  console.log('The winner is the computer! It scored ' + random_number_pc + '.');
} else if (random_number_pc < random_number_player1) {
  console.log('The winner is ' + player1_name + '! He/she scored ' + random_number_player1 + '.');
} else {
  console.log('There are no winners. You both scored ' + random_number_pc + '!');
}
