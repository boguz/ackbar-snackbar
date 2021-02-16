import { css } from 'lit-element';
import { variables } from './variables.js';

export const ackbarSnackbarStyles = css`
  ${variables}

  :host,
  :host([position="bottom left"]) {
    width: fit-content;
    position: fixed;
    bottom: var(--ackbar-margins);
    left: var(--ackbar-margins);
  }

  :host([position="top left"]) {
    bottom: unset;
    top: var(--ackbar-margins);
    left: var(--ackbar-margins);
    transform: none;
  }

  :host([position="top center"]) {
    bottom: unset;
    top: var(--ackbar-margins);
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="top right"]) {
    bottom: unset;
    left: unset;
    top: var(--ackbar-margins);
    right: var(--ackbar-margins);
  }

  :host([position="bottom center"]) {
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="bottom right"]) {
    left: unset;
    right: var(--ackbar-margins);
  }

  :host([position="middle left"]) {
    bottom: unset;
    top: 50%;
    left: var(--ackbar-margins);
    transform: translateY(-50%);
  }

  :host([position="middle center"]) {
    bottom: unset;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  :host([position="middle right"]) {
    bottom: unset;
    top: 50%;
    left: unset;
    right: var(--ackbar-margins);
    transform: translateY(-50%);
  }
`;
