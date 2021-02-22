import { css } from 'lit-element';

export const ackbarBarStyles = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: var(--ackbar-width);
    max-width: var(--ackbar-max-width);
    background-color: var(--ackbar-color-bg);
    padding: calc(var(--ackbar-padding-normal) / 2) var(--ackbar-padding-normal);
    margin-top: var(--ackbar-spacing-normal);
    color: var(--ackbar-color-text);
    border-radius: var(--ackbar-radius-normal);
    line-height: var(--ackbar-line-height);
  }

  /* VARIANTS*/
  :host([variant='success']) {
    background-color: var(--ackbar-color-success);
  }

  :host([variant='error']) {
    background-color: var(--ackbar-color-error);
  }

  :host([variant='warning']) {
    background-color: var(--ackbar-color-warning);
  }

  :host([variant='info']) {
    background-color: var(--ackbar-color-info);
  }

  /* SIZES */
  :host([size='small']) {
    padding: calc(var(--ackbar-padding-normal) / 3)
      calc(var(--ackbar-padding-normal) / 2);
  }

  :host([size='small']) .ackbar-bar__message,
  :host([size='small']) .ackbar-bar__button {
    font-size: calc(var(--ackbar-base-font-size) * 0.75);
  }

  :host([size='large']) {
    padding: calc(var(--ackbar-padding-normal) * 0.5)
      calc(var(--ackbar-padding-normal) * 1.25);
  }

  :host([size='large']) .ackbar-bar__message,
  :host([size='large']) .ackbar-bar__button {
    font-size: calc(var(--ackbar-base-font-size) * 1.5);
  }

  /* HAS BUTTON */
  :host([hasButton]) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: var(--ackbar-grid-gap);
  }

  /* BUTTON */
  .ackbar-bar__button {
    border: none;
    background-color: var(--ackbar-color-button-background);
    font-size: var(--ackbar-base-font-size);
    color: var(--ackbar-color-button-default);
    outline: none;
    opacity: var(--ackbar-button-opacity);
    padding: var(--ackbar-button-padding);
    border-radius: 0.25rem;
  }

  :host([variant='success']) .ackbar-bar__button,
  :host([variant='error']) .ackbar-bar__button,
  :host([variant='info']) .ackbar-bar__button,
  :host([variant='warning']) .ackbar-bar__button {
    color: var(--ackbar-color-text);
  }

  .ackbar-bar__message {
    margin: 0;
    font-size: var(--ackbar-base-font-size);
  }

  @media (hover: hover) {
    .ackbar-bar__button:hover {
      background-color: var(--ackbar-color-button-background-hover);
      cursor: pointer;
      opacity: var(--ackbar-button-opacity-hover);
    }
  }
`;
