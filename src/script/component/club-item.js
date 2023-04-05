class ClubItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  /**
   * @param {any} ingredients
   */
  set Club(ingredients) {
    this.ingredients = ingredients;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .fan-art-club {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .club-info {
          padding: 24px;
        }
        .club-info > h2 {
          font-weight: lighter;
        }
        .club-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
          
    <div class="club-info">
      <h2>${this.ingredients.idIngredient}</h2>
      <h2>${this.ingredients.strIngredient}</h2>
      <p>${this.ingredients.strDescription}</p>
    </div>
    `;
  }
}

customElements.define("club-item", ClubItem);
// <img class="fan-art-club" src="${this.ingredients.strTeamBadge}" alt="Fan Art">