import { css } from 'lit-element';

export const variables = css`
  :host {
    /* Colors: */
    --ackbar-color-bg: rgb(53, 53, 53);
    --ackbar-color-success: rgb(105,199,109);
    --ackbar-color-error: rgb(234,94,94);
    --ackbar-color-warning: rgb(241,153,78);
    --ackbar-color-info: rgb(47,162,255);
    --ackbar-color-text: rgb(255, 255, 255);
    --ackbar-color-button-default: rgb(149, 104, 228);
    --ackbar-color-button-hover-background: rgba(0, 0, 0, .1);

    /* Distances / Position / Spacing*/
    --ackbar-padding-normal: 1rem;
    --ackbar-padding-half: calc(var(--ackbar-padding-normal) / 2);
    --ackbar-padding-fourth: calc(var(--ackbar-padding-normal) / 4);
    --ackbar-spacing-normal: .25rem;
    --ackbar-margins: 1rem;
    --ackbar-max-width: 100%;
    --ackbar-min-width: 20rem;

    /* Other */
    --ackbar-radius-normal: .25rem;
    --ackbar-opacity: 1;
  }
`;
