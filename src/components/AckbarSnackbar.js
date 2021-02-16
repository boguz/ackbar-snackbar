import { html, css, LitElement } from 'lit-element';
import { ackbarSnackbarStyles } from '../styles/ackbar-snackbar.styles.js';

import './ackbar-bar.js';

import { defaultOptions } from '../js/defaultOptions.js';

export class AckbarSnackbar extends LitElement {
  render() {
    return html``
  }

  static get styles() {
    return css`
      ${ackbarSnackbarStyles}
    `;
  }

  constructor() {
    super();

    window.addEventListener('ackbar-snackbar-add', this._handleSnackbarAdd.bind(this));
    window.addEventListener('ackbar-snackbar-remove', this._handleSnackbarRemove.bind(this));
  }

  _handleSnackbarAdd(event) {
    const snackbarOptions = {
      id: Date.now(),
      ...defaultOptions,
      ...event.detail,
    }

    const newSnackbar = this._createNewSnackbar(snackbarOptions);
    this.shadowRoot.prepend(newSnackbar);
  }

  _handleSnackbarRemove(event) {
    this.shadowRoot.getElementById(event.detail.snackbarID).remove();
  }

  _createNewSnackbar(snackbarOptions) {

    const newSnackbar = document.createElement('ackbar-bar');
    newSnackbar.id = snackbarOptions.id;
    newSnackbar.type = snackbarOptions.type;
    newSnackbar.message = snackbarOptions.message;
    newSnackbar.hasFadedIn = snackbarOptions.hasFadedIn;
    newSnackbar.duration = snackbarOptions.duration;
    newSnackbar.buttonText = snackbarOptions.buttonText;
    newSnackbar.buttonCallback = snackbarOptions.buttonCallback;
    newSnackbar.setAttribute('variant', snackbarOptions.variant);
    newSnackbar.setAttribute('id', snackbarOptions.id);
    return newSnackbar;
  }
}
