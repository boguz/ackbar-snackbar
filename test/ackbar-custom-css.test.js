import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';

const cssVariables = [
  {
    name: '--ackbar-color-bg',
    value: 'rgb(53, 53, 53)',
    testValue: 'rgb(255, 255, 255)',
  },
  {
    name: '--ackbar-color-success',
    value: 'rgb(105, 199, 109)',
    testValue: 'rgb(255, 255, 255)',
  },
  {
    name: '--ackbar-color-error',
    value: 'rgb(234, 94, 94)',
    testValue: 'rgb(255, 255, 255)',
  },
  {
    name: '--ackbar-color-warning',
    value: 'rgb(241, 153, 78)',
    testValue: 'rgb(255, 255, 255)',
  },
  {
    name: '--ackbar-color-info',
    value: 'rgb(47, 162, 255)',
    testValue: 'rgb(255, 255, 255)',
  },
  {
    name: '--ackbar-color-text',
    value: 'rgb(255, 255, 255)',
    testValue: 'rgb(0, 0, 0)',
  },
  {
    name: '--ackbar-color-button-default',
    value: 'rgb(149, 104, 228)',
    testValue: 'rgb(255, 255, 255)',
  },
  {
    name: '--ackbar-color-button-background',
    value: 'transparent',
    testValue: 'rgba(255, 255, 255)',
  },
  {
    name: '--ackbar-color-button-background-hover',
    value: 'rgba(0, 0, 0, 0.1)',
    testValue: 'rgb(255, 255, 255)',
  },
  {
    name: '--ackbar-padding-normal',
    value: '1rem',
    testValue: '20px',
  },
  {
    name: '--ackbar-button-padding',
    value: '0.125rem 0.5rem',
    testValue: '20px 10px',
  },
  {
    name: '--ackbar-spacing-normal',
    value: '0.25rem',
    testValue: '20px',
  },
  {
    name: '--ackbar-margins',
    value: '1rem',
    testValue: '20px',
  },
  {
    name: '--ackbar-width',
    value: '25rem',
    testValue: '200px',
  },
  {
    name: '--ackbar-max-width',
    value: 'calc(100vw - calc( 1rem * 4))',
    testValue: '20rem',
  },
  {
    name: '--ackbar-line-height',
    value: '1.2',
    testValue: '1',
  },
  {
    name: '--ackbar-button-opacity',
    value: '0.75',
    testValue: '0.5',
  },
  {
    name: '--ackbar-button-opacity-hover',
    value: '1',
    testValue: '0.75',
  },
  {
    name: '--ackbar-base-font-size',
    value: '1rem',
    testValue: '1.25rem',
  },
  {
    name: '--ackbar-radius-normal',
    value: '0.25rem',
    testValue: '8px',
  },
  {
    name: '--ackbar-opacity',
    value: '1',
    testValue: '0.75',
  },
  {
    name: '--ackbar-grid-gap',
    value: '1rem',
    testValue: '8px',
  },
  {
    name: '--ackbar-box-shadow',
    value: 'none',
    testValue: '1px 1px 4px rgba(0, 0, 0, 0.2)',
  },
];

describe('AckbarSnackbar default CSS variables', () => {
  cssVariables.forEach(cssVariable => {
    it(`has correct ${cssVariable.name} variable`, async () => {
      const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
      const value = getComputedStyle(element).getPropertyValue(
        cssVariable.name
      );
      expect(value.trim()).to.equal(cssVariable.value);
    });
  });
});

describe('Can overwrite custom css variables', () => {
  cssVariables.forEach(cssVariable => {
    it(`can overwrite ${cssVariable.name} variable`, async () => {
      const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
      element.style.setProperty(cssVariable.name, cssVariable.testValue);
      const value = getComputedStyle(element).getPropertyValue(
        cssVariable.name
      );
      expect(value.trim()).to.equal(cssVariable.testValue);
    });
  });
});
