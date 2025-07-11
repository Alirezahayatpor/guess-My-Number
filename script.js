'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highsScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const sizemessage = function (size) {
  document.querySelector('.number').style.width = size;
};


//check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔no number!';
    displayMessage('⛔no number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    sizemessage('30rem');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highsScore) {
      highsScore = score;
      document.querySelector('.highscore').textContent = highsScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'TOO High 📈 ' : 'TOO Low 📉' ;
      displayMessage(guess > secretNumber ? 'TOO High 📈 ' : 'TOO Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost in game';
      displayMessage('💥 You lost in game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;

  displayMessage('Start guessing ...');
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';

  sizemessage('15rem');
  document.querySelector('.number').textContent = '?';
});
