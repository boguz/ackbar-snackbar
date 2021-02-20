import { css } from 'lit-element';

export const ackbarBarStyles = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--ackbar-color-bg);
    padding: var(--ackbar-padding-normal);
    margin-top: var(--ackbar-spacing-normal);
    color: var(--ackbar-color-text);
    border-radius: var(--ackbar-radius-normal);
    max-width: var(--ackbar-max-width);
    min-width: var(--ackbar-min-width);
    width: fit-content;
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
    padding: calc(var(--ackbar-padding-normal) / 2)
      calc(var(--ackbar-padding-normal) / 2);
    font-size: 87.5%;
  }

  :host([size='small']) .ackbar-bar__button {
    font-size: 87.5%;
  }

  :host([size='large']) {
    padding: calc(var(--ackbar-padding-normal) * 1.25)
      calc(var(--ackbar-padding-normal) * 1.25);
    font-size: 125%;
  }

  :host([size='large']) .ackbar-bar__button {
    font-size: 125%;
  }

  /* HAS BUTTON */
  :host([hasButton]) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1rem;
  }

  /* BUTTON */
  .ackbar-bar__button {
    border: none;
    background-color: transparent;
    font-size: 1rem;
    color: var(--ackbar-color-button-default);
    outline: none;
    opacity: 0.75;
    padding: 0.5rem;
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
  }

  @media (hover: hover) {
    .ackbar-bar__button:hover {
      background-color: var(--ackbar-color-button-hover-background);
      cursor: pointer;
      opacity: 1;
    }
  }
`;
