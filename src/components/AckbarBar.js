import { html, css, LitElement } from 'lit-element';
import { ackbarBarStyles } from '../styles/ackbar-bar.styles.js';

import { animations } from '../js/animations.js';

export class AckbarBar extends LitElement {
  render() {
    return html`
      <p class="ackbar-bar__message">${this.message}</p>

      ${this.buttonText ? html`
        <button class="ackbar-bar__button" @click="${this._handleButtonClick}">${this.buttonText}</button>
      ` : ''}
    `;
  }

  static get styles() {
    return css`
      ${ackbarBarStyles}
    `;
  }

  static get properties() {
    return {
      animationName: { type: String },
      buttonCallback: { type: Function },
      buttonText: { type: String },
      duration: { type: Number },
      hasFadedIn: { type: Boolean },
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
    this._fadeInDuration = 500;
    this._fadeOutDuration = 500;
  }

  connectedCallback() {
    super.connectedCallback();

    // Start the timer
    if (this.type === 'auto' || !this._buttonText) {
      console.log('starting timer');
      this._timer();
    }
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
    if (!this.hasFadedIn) this._fadeIn();
  }

  /**
   * Add fade in animation, dispatch event
   *
   * @private
   */
  _fadeIn() {
    const animationKeyframes = animations[this.animationName].showAnimation;
    const animationOptions = { duration: this._fadeInDuration, iterations: 1 };
    this.animate(animationKeyframes, animationOptions);

    this.dispatchEvent(new CustomEvent('ackbar-bar-has-faded-in', {
      bubbles: true,
      composed: true,
      detail: {
        snackbarID: this.id
      }
    }));
  }

  /**
   * Add fade out animation, remove snackbar
   *
   * @private
   */
  _fadeOut() {
    const fadeOutKeyframes =  animations[this.animationName].hideAnimation;
    const fadeOutOptions = { duration: this._fadeOutDuration, iterations: 1 };
    const fadeOutAnimation = this.animate(fadeOutKeyframes, fadeOutOptions);

    // after fadeout animation finishes, remove snackbar
    fadeOutAnimation.onfinish = () => {
      this._removeSnackbar();
    };
  }

  /**
   * Dispatch event to remove snackbar from DOM
   *
   * @private
   */
  _removeSnackbar() {
    this.dispatchEvent(new CustomEvent('ackbar-snackbar-remove', {
      bubbles: true,
      composed: true,
      detail: {
        snackbarID: this.id
      }
    }));
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
