import Card from './card'

let cardsCount = 8,
  cardsNumberArray = [],
  cardsArray = [],
  firstCard = null,
  secondCard = null,
  timerLenght = null

let stopGame = document.querySelector('.stop-button');

function newGame(container, cardsCount) {
  let timer = document.getElementById('timer');
  timerLenght = 40;

  let timerInterval = setInterval(() => {
    timerLenght--;
    let timerMinets = timerLenght / 60;

    if (timerMinets < 10) {
      timerMinets = `0${Math.floor(timerMinets)}`.toString();
    };

    let timerSeconds = timerLenght % 60;

    if (timerSeconds < 10) {
      timerSeconds = `0${Math.floor(timerSeconds)}`.toString();
    };

    timer.innerHTML = `${timerMinets}:${timerSeconds}`;

    if (timerLenght === 20) {
      timer.classList.add('low-timer');
    };

    if (timerLenght === 0) {
      clearInterval(timerInterval);
      timer.classList.remove('low-timer');
      timer.innerHTML = 'REPEAT?';
      timer.style.transition = 'transform 5s var(--default-cubic)';
    };
  }, 1000);


  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i)
    cardsNumberArray.push(i)
  }


  cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardNumber, flip))
  }

  function flip(card) {

    if (firstCard != null && secondCard != null) {
      if (firstCard.number != secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard == null) {
      firstCard = card;
    } else {
      if (secondCard == null) {
        secondCard = card;
      }
    }

    if (firstCard != null && secondCard != null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    if (document.querySelectorAll('.card.success').length == cardsNumberArray.length) {
      timer.classList.remove('low-timer')
      timer.innerHTML = 'REPEAT?'
      timer.style.transition = 'transform 5s var(--default-cubic)'
      clearInterval(timerInterval)
    }
  }
}

function removeGame() {
  let classMatcher = /(?:^|\s)card(?:\s|$)/;
  let els = document.getElementsByTagName('*');

  for (let i = els.length; i--;) {
    if (classMatcher.test(els[i].className)) {
      els[i].parentNode.removeChild(els[i]);
    };
  };

  timer.classList.remove('low-timer');
  timer.innerHTML = 'REPEAT?';
  timer.style.transition = 'transform 5s var(--default-cubic)';
  timerLenght = 1;

  document.querySelector('.game-zone').classList.add('hidden');
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    removeGame()
  }
};

stopGame.addEventListener('click', () => {
  removeGame()
});

newGame(document.getElementById('game-zone'), cardsCount);


