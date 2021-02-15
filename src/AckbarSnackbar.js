import { html, LitElement } from 'lit-element';
import { AckbarBar } from './AckbarBar.js';

export class AckbarSnackbar extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hello world';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <ackbar-bar></ackbar-bar>
    `;
  }
}
