export default class Card {
  _open = false;
  _success = false;

  constructor(container, number, action) {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.card.innerHTML = `<div class="card__back"></div><div class="card__front"><p class="card__front-text">${number}</p></div>`;
    this.number = number;

    this.card.addEventListener('click', () => {
      if (this._open == false && this._success == false) {
        this.open = true;
        action(this)
      }
    });
    container.append(this.card)
  };

  set open(value) {
    this._open = value;
    value ? this.card.classList.add('open') : this.card.classList.remove('open');
  };

  get open() {
    return this._open
  };

  set success(value) {
    this._open = value;
    value ? this.card.classList.add('success') : this.card.classList.remove('success');
  };

  get success() {
    return this._success
  };
};

