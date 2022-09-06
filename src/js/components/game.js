import Card from './card'

let cardsCount = 0,
  cardsNumberArray = [],
  cardsArray = [],
  firstCard = null,
  secondCard = null,
  timerLenght = 1,
  difficultGame = 1

let stopGame = document.querySelector('.stop-button');
let goButton = document.querySelector('.main__go-button');
let settingMenu = document.querySelector('.game-setting');
let startGame = document.querySelector('.form__btn');


goButton.addEventListener('click', () => {
  settingMenu.classList.remove('hidden')
});

startGame.addEventListener('click', () => {
  if (Number(document.querySelector('.form__input-number').value) <= 14 && Number(document.querySelector('.form__input-number').value) >= 2) {
    newGame(document.getElementById('game-zone'), cardsCount);
    document.querySelector('.game-zone').classList.remove('hidden');
    removeSetting();
  }
});

function newGame(container, cardsCount) {
  let timer = document.getElementById('timer');
  cardsCount = Number(document.querySelector('.form__input-number').value);
  difficultGame = Number(document.querySelector('.form__select').value);

  if (difficultGame == 1) {
    timerLenght = cardsCount * 5
  }
  if (difficultGame == 2) {
    timerLenght = cardsCount * 3
  }
  if (difficultGame == 3) {
    timerLenght = cardsCount * 1.7
  }

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

    if (timerLenght <= 20) {
      timer.classList.add('low-timer');
    };

    if (timerLenght === 0) {
      let classMatcher = /(?:^|\s)card(?:\s|$)/;
      let els = document.getElementsByTagName('*');

      for (let i = els.length; i--;) {
        if (classMatcher.test(els[i].className)) {
          els[i].parentNode.removeChild(els[i]);
        };
      };

      cardsNumberArray = []
      cardsArray = []
      clearInterval(timerInterval);
      timer.classList.remove('low-timer');
      timer.innerHTML = 'REPEAT?';
      timer.style.transition = 'transform 5s var(--default-cubic)';
      alert('YOU LOSE!~')
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
      alert('You WIN')
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

  cardsNumberArray = []
  cardsArray = []

  timer.classList.remove('low-timer');
  timer.innerHTML = 'REPEAT?';
  timer.style.transition = 'transform 5s var(--default-cubic)';
  timerLenght = 1;

  document.querySelector('.game-zone').classList.add('hidden');
}

function removeSetting() {
  document.querySelector('.game-setting').classList.add('hidden');
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    removeGame();
    removeSetting();
  }
};

stopGame.addEventListener('click', () => {
  removeGame()
});

document.addEventListener('click', e => {
  if (e.target == document.querySelector('.game-zone') || e.target == document.querySelector('.game-setting')) {
    removeGame()
    removeSetting()
  }
});

// newGame(document.getElementById('game-zone'), cardsCount);


