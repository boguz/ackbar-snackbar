import { html, css, LitElement } from 'lit-element';
import { ackbarSnackbarStyles } from '../styles/ackbar-snackbar.styles.js';

import './ackbar-bar.js';

import { defaultOptions } from '../js/defaultOptions.js';
import { validateSnackbarOptions } from '../js/validateSnackbarOptions.js';

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

    // Add event listeners
    window.addEventListener('ackbar-snackbar-add', this._handleSnackbarAdd.bind(this));
    window.addEventListener('ackbar-snackbar-remove', this._handleSnackbarRemove.bind(this));
  }

  /**
   * Handle snackbar add
   *  - create options object
   *  - create new snackbar
   *  - append new snackbar to DOM
   *
   * @param event
   * @private
   */
  _handleSnackbarAdd(event) {
    const validationErrors = validateSnackbarOptions(event.detail);

    if (validationErrors.length > 0) {
      for (const { message } of validationErrors) {
        console.error('ACKBAR-SNACKBAR:', '\n', 'There was a problem creating your snackbar. Please check your custom event options.', '\n', 'ERROR:', message);
      }
    } else {
      const snackbarOptions = {
        id: Date.now(),
        ...defaultOptions,
        ...event.detail,
      }

      const newSnackbar = this._createNewSnackbar(snackbarOptions);
      this.shadowRoot.prepend(newSnackbar);
    }
  }

  /**
   * Remove snackbar from DOM
   *
   * @param event
   * @private
   */
  _handleSnackbarRemove(event) {
    this.shadowRoot.getElementById(event.detail.snackbarID).remove();
  }

  /**
   * Create new snackbar and add correct properties
   *
   * @param snackbarOptions
   * @returns {HTMLElement}
   * @private
   */
  _createNewSnackbar(snackbarOptions) {
    const newSnackbar = document.createElement('ackbar-bar');
    newSnackbar.id = snackbarOptions.id;

    newSnackbar.buttonCallback = snackbarOptions.buttonCallback;
    newSnackbar.buttonText = snackbarOptions.buttonText;
    newSnackbar.duration = snackbarOptions.duration;
    newSnackbar.message = snackbarOptions.message;
    newSnackbar.type = snackbarOptions.type;

    newSnackbar.hasFadedIn = snackbarOptions.hasFadedIn;

    newSnackbar.setAttribute('id', snackbarOptions.id);
    newSnackbar.setAttribute('size', snackbarOptions.size);
    newSnackbar.setAttribute('variant', snackbarOptions.variant);
    return newSnackbar;
  }
}