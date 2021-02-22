import { css } from 'lit-element';

export const variables = css`
  :host {
    /* Colors: */
    --ackbar-color-bg: rgb(53, 53, 53);
    --ackbar-color-success: rgb(105, 199, 109);
    --ackbar-color-error: rgb(234, 94, 94);
    --ackbar-color-warning: rgb(241, 153, 78);
    --ackbar-color-info: rgb(47, 162, 255);
    --ackbar-color-text: rgb(255, 255, 255);
    --ackbar-color-button-default: rgb(149, 104, 228);
    --ackbar-color-button-hover-background: rgba(0, 0, 0, 0.1);

    /* Distances / Position / Spacing*/
    --ackbar-padding-normal: 1rem;
    --ackbar-spacing-normal: 0.25rem;
    --ackbar-margins: 1rem;
    --ackbar-width: 25rem;
    --ackbar-max-width: calc(100vw - calc(var(--ackbar-margins) * 4));
    --ackbar-line-height: 1.2;

    /* Other */
    --ackbar-radius-normal: 0.25rem;
    --ackbar-opacity: 1;
  }
`;
