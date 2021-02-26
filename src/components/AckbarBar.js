import { html, css, LitElement } from 'lit-element';
import { ackbarBarStyles } from '../styles/ackbar-bar.styles.js';

import { animations } from '../js/animations.js';

export class AckbarBar extends LitElement {
  render() {
    return html`
      <p id="snackbarMessage" class="ackbar-bar__message">${this.message}</p>

      ${this.buttonText
        ? html`
            <button
              id="snackbarButton"
              class="ackbar-bar__button"
              @click="${this._handleButtonClick}"
            >
              ${this.buttonText}
            </button>
          `
        : ''}
    `;
  }

  static get styles() {
    return css`
      ${ackbarBarStyles}
    `;
  }

  static get properties() {
    return {
      animationDone: { type: Boolean },
      animationDuration: { type: Number },
      animationName: { type: String },
      buttonCallback: { type: Function },
      buttonText: { type: String },
      duration: { type: Number },
      id: { type: String },
      message: { type: String },
      type: { type: String },
    };
  }

  /**
   * Add Attribute to element, set private variable
   *
   * @param value
   */
  set buttonText(value) {
    if (value) this.setAttribute('hasButton', '');
    this._buttonText = value;
  }

  /**
   * Get value of private variable
   *
   * @returns {*}
   */
  get buttonText() {
    return this._buttonText;
  }

  constructor() {
    super();

    this._timer = this._timer.bind(this);

    this._showStart = Date.now();
  }

  connectedCallback() {
    super.connectedCallback();

    // Start the timer
    if (this.type === 'auto' || !this._buttonText) {
      this._timer();
    }

    // a11y
    this.setAttribute(
      'aria-label',
      this.accessibilityLabel || `Snackbar: ${this.message}`
    );
    this.setAttribute('role', 'alert');
  }

  /**
   * Check if enough time has passed until auto dismiss
   *
   * @private
   */
  _timer() {
    const rightNow = Date.now();
    if (rightNow - this._showStart >= this.duration) {
      this._fadeOut();
      cancelAnimationFrame(this._timer);
    } else {
      requestAnimationFrame(this._timer);
    }
  }

  update(changedProperties) {
    super.update(changedProperties);

    // start fadein on first load
    if (!this.animationDone) this._fadeIn();
  }

  /**
   * Add fade in animation, dispatch event
   *
   * @private
   */
  _fadeIn() {
    const animationKeyframes = animations[this.animationName].showAnimation;
    const animationOptions = {
      duration: this.animationDuration,
      iterations: 1,
    };
    const fadeInAnimation = this.animate(animationKeyframes, animationOptions);

    fadeInAnimation.onfinish = () => {
      if (typeof this.showCallback === 'function') {
        this.showCallback();
      }
    };

    this.dispatchEvent(
      new CustomEvent('ackbar-bar-has-faded-in', {
        bubbles: true,
        composed: true,
        detail: {
          snackbarID: this.id,
        },
      })
    );
  }

  /**
   * Add fade out animation, remove snackbar
   *
   * @private
   */
  _fadeOut() {
    const fadeOutKeyframes = animations[this.animationName].hideAnimation;
    const fadeOutOptions = { duration: this.animationDuration, iterations: 1 };
    const fadeOutAnimation = this.animate(fadeOutKeyframes, fadeOutOptions);

    // after fadeout animation finishes, remove snackbar
    fadeOutAnimation.onfinish = () => {
      if (typeof this.hideCallback === 'function') {
        this.hideCallback();
      }

      this._removeSnackbar();
    };
  }

  /**
   * Dispatch event to remove snackbar from DOM
   *
   * @private
   */
  _removeSnackbar() {
    this.dispatchEvent(
      new CustomEvent('ackbar-snackbar-remove', {
        bubbles: true,
        composed: true,
        detail: {
          snackbarID: this.id,
        },
      })
    );
  }

  /**
   * Handle button click
   *  - trigger dismiss (fade out)
   *  - trigger custom callback function
   *
   * @private
   */
  _handleButtonClick() {
    this._fadeOut();
    if (typeof this.buttonCallback === 'function') {
      this.buttonCallback();
    }
  }
}
