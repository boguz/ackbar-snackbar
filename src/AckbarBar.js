import { html, LitElement } from 'lit-element';

export class AckbarBar extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'It\'s a trap!!!';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
    `;
  }
}

window.customElements.define('ackbar-bar', AckbarBar);
