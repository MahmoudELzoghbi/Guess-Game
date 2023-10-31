// to update score
console.log(document.querySelector('.highScore'));
//to stop game
let shouldContinue = true;
// high score
let highScore = 0;
//guess number
let number = document.querySelector('.number');
let secritNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secritNumber);

//varabel for your score
let curentScore = 20;
let scoreToUser = document.querySelector('.child-score');
// varbiel for massage
let massageToUser = document.querySelector('.massage');
// btn check
let btnCheck = document.querySelector('.btn-check');
btnCheck.addEventListener('click', () => {
  console.log(secritNumber, scoreToUser, highScore);
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // if user input false value give him error
  if (!guess) {
    massageToUser.textContent = '❌ thier is no number ';
  } else if (guess === secritNumber && shouldContinue) {
    number.textContent = secritNumber;
    document.querySelector('body').style.backgroundColor = '#79ce25';
    number.style.width = '250px';
    massageToUser.textContent = '✅ correct guess 🎉';
    document.querySelector('.guess').disabled = true;
    if (curentScore > highScore) {
      highScore = curentScore;
      document.querySelector('.highScore').textContent = curentScore;
    }
    //vectory code
  } else if (guess !== secritNumber) {
    massageToUser.textContent =
      guess > secritNumber ? '📈too high' : '📉 too low';
    curentScore--;
    scoreToUser.textContent = curentScore;
    if (curentScore <= 0) {
      massageToUser.textContent = '☠️game over';
      scoreToUser.textContent = 0;
      document.querySelector('.guess').disabled = true;
      shouldContinue = false;
    }
  }
});

// btn again to reset the game
let btnReset = document.querySelector('.btn-reset');

btnReset.addEventListener('click', () => {
  secritNumber = Math.trunc(Math.random() * 20) + 1;
  massageToUser.textContent = 'start guessing ...';
  document.querySelector('.guess').disabled = false;
  shouldContinue = true;
  curentScore = 20;
  scoreToUser.textContent = curentScore;
  document.querySelector('body').style.backgroundColor = 'rgb(38, 37, 37)';
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  number.style.width = '130px';
});

// ======old code
/*
    if (curentScore > 0) {
      massageToUser.textContent = '📈too high';
      curentScore--;
      scoreToUser.textContent = curentScore;
    } else if (curentScore <= 0) {
      massageToUser.textContent = '☠️game over';
      scoreToUser.textContent = 0;
      document.querySelector('.guess').disabled = true;
      shouldContinue = false;
    }
  } else if (guess < secritNumber) {
    if (curentScore > 0) {
      massageToUser.textContent = '📉 too low';
      curentScore--;
      scoreToUser.textContent = curentScore;
    } else if (curentScore <= 0) {
      massageToUser.textContent = '☠️game over';
      scoreToUser.textContent = 0;
      document.querySelector('.guess').disabled = true;
      shouldContinue = false;
    }
    */
