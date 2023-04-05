import './club-item.js';

class ClubList extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  /**
   * @param {any} ingredients
   */
  set ClubList(ingredients) {
    this.ingredients = ingredients;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this.ingredients.forEach((ingredients) => {
      const clubItemElement = document.createElement('club-item');
      clubItemElement.ingredients = ingredients;
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

customElements.define("club-list", ClubList);
