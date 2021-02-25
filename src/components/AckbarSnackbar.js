import { html, css, LitElement } from 'lit-element';
import { ackbarSnackbarStyles } from '../styles/ackbar-snackbar.styles.js';
import { defaultOptions } from '../js/defaultOptions.js';
import { validateSnackbarOptions } from '../js/validateSnackbarOptions.js';

import './ackbar-bar.js';

export class AckbarSnackbar extends LitElement {
  render() {
    return html``;
  }

  static get styles() {
    return css`
      ${ackbarSnackbarStyles}
    `;
  }

  constructor() {
    super();

    this.newSnackbarProperties = [
      'accessibilityLabel',
      'animationDuration',
      'animationName',
      'buttonCallback',
      'buttonText',
      'duration',
      'hideCallback',
      'message',
      'showCallback',
      'type',
      'hasFadedIn',
    ];
    this.newSnackbarAttributes = ['id', 'size', 'variant'];

    // Add event listeners
    window.addEventListener(
      'ackbar-snackbar-add',
      this._handleSnackbarAdd.bind(this)
    );
    window.addEventListener(
      'ackbar-snackbar-remove',
      this._handleSnackbarRemove.bind(this)
    );
  }

  /**
   * Dispatch a ready event once the snackbar is added to the dom
   */
  connectedCallback() {
    super.connectedCallback();

    this.dispatchEvent(
      new CustomEvent('ackbar-snackbar-ready', {
        bubbles: true,
        composed: true,
      })
    );

    // a11y
    this.setAttribute('aria-live', 'polite');
  }

  /**
   * Remove event listeners once the snackbar is disconnected
   */
  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener(
      'ackbar-snackbar-add',
      this._handleSnackbarAdd.bind(this)
    );
    window.removeEventListener(
      'ackbar-snackbar-remove',
      this._handleSnackbarRemove.bind(this)
    );
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
    const eventOptions = event.detail || {};
    const validationErrors = validateSnackbarOptions(eventOptions);

    if (validationErrors.length > 0) {
      for (const { message } of validationErrors) {
        console.error(
          'There was a problem creating your snackbar. Please check your custom event options.',
          message
        );
      }
    } else {
      const snackbarOptions = {
        id: Date.now(),
        ...defaultOptions,
        ...eventOptions,
      };

      const newSnackbar = this._createNewSnackbar(snackbarOptions);
      this.shadowRoot.prepend(newSnackbar);

      this.dispatchEvent(
        new CustomEvent('ackbar-snackbar-bar-added', {
          bubbles: true,
          composed: true,
          detail: {
            snackbarID: newSnackbar.id,
          },
        })
      );
    }
  }

  /**
   * Remove snackbar from DOM.
   * Dispatch event
   *
   * @param event
   * @private
   */
  _handleSnackbarRemove(event) {
    this.shadowRoot.getElementById(event.detail.snackbarID).remove();

    this.dispatchEvent(
      new CustomEvent('ackbar-snackbar-bar-removed', {
        bubbles: true,
        composed: true,
        detail: {
          snackbarID: event.detail.snackbarID,
        },
      })
    );
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

    this.newSnackbarProperties.forEach(propertyName => {
      newSnackbar[propertyName] = snackbarOptions[propertyName];
    });

    this.newSnackbarAttributes.forEach(attributeName => {
      newSnackbar.setAttribute(attributeName, snackbarOptions[attributeName]);
    });

    if (snackbarOptions.customClasses) newSnackbar.className += snackbarOptions.customClasses;

    return newSnackbar;
  }
}
