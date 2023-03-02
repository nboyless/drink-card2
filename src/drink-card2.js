import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class DrinkCard2 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
 @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

.controls {
  margin: 16px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  max-width: 300px;
  margin: 16px 16px;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
}
.card img {
  width: 100%;
}
.card p {
  padding: 16px;
}
.card>.button {
  display: none;
}

.button {
  background-color: #2895e8; /* Blue */
  border: none;
  color: white;
  padding: 8px 2vw;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 4px;
  width: 25%;
  transform: scale(1);
  transition: 0.6s;
}

.button2 {
  background-color: #2895e8; /* Blue */
  border: none;
  color: white;
  padding: 8px 2vw;
  text-align: left;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 4px;
  width: 70%;
  transform: scale(1);
  transition: 0.6s;
}

.button:hover, .button:focus {
  transform: scale(1.05);
  box-shadow: 0px 0px 48px 10px rgba(40,149,232,.7);
}

@media (min-width: 501px) and (max-width: 800px) {
  .card>.button {
    display: inline-block;
  }
}
@media (max-width: 500px) {
  .card {
    transform: scale(1.1);
  }
}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
     <div class="controls">
  <button class="button">toggle clone card</button>
  <button class="button">change clone title</button>
  <button class="button">toggle clone bg color</button>
</div>
<div class="cards">
  <div class="card">
    <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" id="image">
    <h2 >Drink Prime!</h2>
    <p >Prime is a sports drink made by Logan Paul</p>
      <details class="button2">
        <summary>Nutrition info</summary>
        <div>
          <ul>
            <li>Has 100g of sugar</li>
            <li>O calories</li>
          </ul>
  </div>
  </details>
  </div>
</div>

    `;
  }
}

customElements.define('drink-card2', DrinkCard2);