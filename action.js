// Variables and constants initialization
var player_name = prompt('Enter your name.');
var number_of_games = parseInt(prompt('How many games do you want to play? Please enter a number.'));
var score_pc = [];
var score_player = [];

// ******************* Check data in Console *******************
console.log('GAME INFO');
console.log('Player one is ' + player_name + '.');
console.log('The second player is the computer.');
console.log('You are going to play ' + number_of_games + ' games.')
console.log(' ');

// ******************* Print data in HTML *******************

// Array creato da getElementsByClassName
console.log(document.getElementsByClassName('player-name'));
document.getElementsByClassName('player-name').innerHTML = player_name// --> NON FUNZIONA !!!

document.getElementById('number-of-games').innerHTML = number_of_games;

// ************* Game - Output in Console & HTML *************
console.log('SCORE');
for (i = 0; i < number_of_games; i++) {
  // Match counts
  var match_number = i + 1;
  console.log('*** Match number ' + match_number + ' ***.');
  // Roll of the dice
  alert('Match number ' + match_number + '. Your turn! Roll the dice!');
  var random_number_player = Math.floor(Math.random() * 6) + 1;
  score_player.push(random_number_player);
  var random_number_pc = Math.floor(Math.random() * 6) + 1;
  score_pc.push(random_number_pc);

  // ******** Winner Check ********
  if (random_number_pc > random_number_player) {
    // *** You lose ***
    console.log('The winner is the computer! It scored ' + random_number_pc + '.');
    console.log('You scored ' + random_number_player + '.');
    console.log(' ');
    // Print in HTML
    document.getElementById('winner').innerHTML = 'The winner is the computer! It scored ' + random_number_pc + '.';
    document.getElementById('loser').innerHTML = 'You scored ' + random_number_player + '.';
  } else if (random_number_pc < random_number_player) {
    // *** You win ***
    console.log('The winner is ' + player_name + '! You scored ' + random_number_player + '.');
    console.log('The computer scored ' + random_number_pc + '.');
    console.log(' ');
    // Print in HTML
    document.getElementById('winner').innerHTML = 'The winner is ' + player_name + '! You scored ' + random_number_player + '.';
    document.getElementById('loser').innerHTML = 'The computer scored ' + random_number_pc + '.';
  } else {
    // *** No winners ***
    console.log('There are no winners. You both scored ' + random_number_pc + '!');
    console.log(' ');
    // Print in HTML
    document.getElementById('winner').innerHTML = 'There are no winners. You both scored ' + random_number_pc + '!';
  }
}

// ************** Check Highest Score - Output in Console **************

// Computer's highest score
var highest_score_pc = score_pc[0];

for (i = 0; i < score_pc.length; i++) {
  if (score_pc[i] > highest_score_pc) {
    highest_score_pc = score_pc[i];
  }
}
console.log('COMPUTER\'S RESULTS')
console.log('The computer\'s highest score is: ' + highest_score_pc + '.');
console.log('The array containing the pc score has ' + score_pc.length + ' elements. They are:');
console.log(score_pc);
console.log(' ');

// Player's highest score
var highest_score_player = score_player[0];

for (i = 0; i < score_player.length; i++) {
  if (score_player[i] > highest_score_player) {
    highest_score_player = score_player[i];
  }
}
console.log(player_name + '\'s RESULTS')
console.log(player_name + '\'s highest score is: ' + highest_score_player + '.');
console.log('The array containing the player\'s score has ' + score_player.length + ' elements. They are:');
console.log(score_player);
console.log(' ');

// *** Output in HTML ***
document.getElementById('highest-score-pc').innerHTML = highest_score_pc;
document.getElementById('highest-score-player').innerHTML = highest_score_player;

// Highest score of the game
console.log('HIGHEST SCORE');

if (highest_score_player > highest_score_pc) {
  console.log('The highest score is ' + highest_score_player + ' and it was scored by ' + player_name + '.');
  // Print in HTML
  document.getElementById('highest-score').innerHTML = highest_score_player;
  document.getElementById('best-player').innerHTML = player_name;
} else if (highest_score_player < highest_score_pc) {
  console.log('The highest score is ' + highest_score_pc + ' and it was scored by the computer.');
  // Print in HTML
  document.getElementById('highest-score').innerHTML = highest_score_pc;
  document.getElementById('best-player').innerHTML = 'the computer.';
} else {
  console.log('The highest score is ' + highest_score_player + ' and it was scored by both the computer and ' + player_name + '.');
  // Print in HTML
  document.getElementById('highest-score').innerHTML = highest_score_player;
  document.getElementById('best-player').innerHTML = 'both the computer and ' + player_name + '.';
}
