import { html, css, LitElement } from 'lit-element';
import { ackbarBarStyles } from '../styles/ackbar-bar.styles.js';

export class AckbarBar extends LitElement {
  render() {
    console.log('XXXXX', this.type);
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
      message: { type: String },
      hasFadedIn: { type: Boolean },
      id: { type: String },
      type: { type: String },
      duration: { type: Number },
      buttonText: { type: String },
      buttonCallback: { type: Function }
    };
  }

  set buttonText(value) {
    if (value) this.setAttribute('hasButton', '');
    this._buttonText = value;
  }

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
    if (this.type === 'auto') {
      console.log('should be auto');
      this._timer();
    }
  }

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

    if (!this.hasFadedIn) this._fadeIn();
  }

  _fadeIn() {
    const animationKeyframes = [{ opacity: '0' }, { opacity: '1' }];
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

  _fadeOut() {
    const fadeOutKeyframes = [{ opacity: '1' }, { opacity: '0' }];
    const fadeOutOptions = { duration: this._fadeOutDuration, iterations: 1 };
    const fadeOutAnimation = this.animate(fadeOutKeyframes, fadeOutOptions);

    fadeOutAnimation.onfinish = () => {
      this._removeSnackbar();
    };
  }

  _removeSnackbar() {
    this.dispatchEvent(new CustomEvent('ackbar-snackbar-remove', {
      bubbles: true,
      composed: true,
      detail: {
        snackbarID: this.id
      }
    }));
  }

  _handleButtonClick() {
    this._fadeOut();
    if (typeof this.buttonCallback === 'function') {
      this.buttonCallback();
    }
  }
}
