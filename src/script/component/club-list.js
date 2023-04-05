import './club-item.js';

class DrinksList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  /**
   * @param {any} drinks
   */
  set DrinksList(drinks) {
    this.drinks = drinks;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this.drinks.forEach((drinks) => {
      const clubItemElement = document.createElement('club-item');
      clubItemElement.Drinks = drinks;
      this.shadowDOM.appendChild(clubItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("club-list", DrinksList);
