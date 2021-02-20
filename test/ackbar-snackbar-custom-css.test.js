import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('AckbarSnackbar default CSS variables', () => {
  it('has correct default background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const bgColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-bg'
    );
    expect(bgColor.trim()).to.equal('rgb(53, 53, 53)');
  });

  it('has correct success background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-success'
    );
    expect(successColor.trim()).to.equal('rgb(105, 199, 109)');
  });

  it('has correct error background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-error'
    );
    expect(successColor.trim()).to.equal('rgb(234, 94, 94)');
  });

  it('has correct warning background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-warning'
    );
    expect(successColor.trim()).to.equal('rgb(241, 153, 78)');
  });

  it('has correct info background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-info'
    );
    expect(successColor.trim()).to.equal('rgb(47, 162, 255)');
  });

  it('has correct text color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-text'
    );
    expect(successColor.trim()).to.equal('rgb(255, 255, 255)');
  });

  it('has correct button color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-button-default'
    );
    expect(successColor.trim()).to.equal('rgb(149, 104, 228)');
  });

  it('has correct button hover background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-button-hover-background'
    );
    expect(successColor.trim()).to.equal('rgba(0, 0, 0, 0.1)');
  });

  it('has correct padding variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-padding-normal'
    );
    expect(successColor.trim()).to.equal('1rem');
  });

  it('has correct spacing variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-spacing-normal'
    );
    expect(successColor.trim()).to.equal('0.25rem');
  });

  it('has correct margins variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-margins'
    );
    expect(successColor.trim()).to.equal('1rem');
  });

  it('has correct max-width variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-max-width'
    );
    expect(successColor.trim()).to.equal('100%');
  });

  it('has correct min-width variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-min-width'
    );
    expect(successColor.trim()).to.equal('20rem');
  });

  it('has correct border radius variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-radius-normal'
    );
    expect(successColor.trim()).to.equal('0.25rem');
  });

  it('has correct opacity variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-opacity'
    );
    expect(successColor.trim()).to.equal('1');
  });
});

describe('Can overwrite custom css variables', () => {
  it('has correct default background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-color-bg', 'rgb(255, 255, 255)');
    const bgColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-bg'
    );
    expect(bgColor.trim()).to.equal('rgb(255, 255, 255)');
  });

  it('has correct success background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-color-success', 'rgb(255, 255, 255)');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-success'
    );
    expect(successColor.trim()).to.equal('rgb(255, 255, 255)');
  });

  it('has correct error background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-color-error', 'rgb(255, 255, 255)');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-error'
    );
    expect(successColor.trim()).to.equal('rgb(255, 255, 255)');
  });

  it('has correct warning background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-color-warning', 'rgb(255, 255, 255)');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-warning'
    );
    expect(successColor.trim()).to.equal('rgb(255, 255, 255)');
  });

  it('has correct info background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-color-info', 'rgb(255, 255, 255)');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-info'
    );
    expect(successColor.trim()).to.equal('rgb(255, 255, 255)');
  });

  it('has correct text color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-color-text', 'rgb(0, 0, 0)');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-text'
    );
    expect(successColor.trim()).to.equal('rgb(0, 0, 0)');
  });

  it('has correct button color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty(
      '--ackbar-color-button-default',
      'rgb(255, 255, 255)'
    );
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-button-default'
    );
    expect(successColor.trim()).to.equal('rgb(255, 255, 255)');
  });

  it('has correct button hover background color variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty(
      '--ackbar-color-button-hover-background',
      'rgb(255, 255, 255)'
    );
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-color-button-hover-background'
    );
    expect(successColor.trim()).to.equal('rgb(255, 255, 255)');
  });

  it('has correct padding variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-padding-normal', '20px');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-padding-normal'
    );
    expect(successColor.trim()).to.equal('20px');
  });

  it('has correct spacing variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-spacing-normal', '20px');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-spacing-normal'
    );
    expect(successColor.trim()).to.equal('20px');
  });

  it('has correct margins variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-margins', '20px');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-margins'
    );
    expect(successColor.trim()).to.equal('20px');
  });

  it('has correct max-width variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-max-width', '240px');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-max-width'
    );
    expect(successColor.trim()).to.equal('240px');
  });

  it('has correct min-width variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-min-width', '80px');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-min-width'
    );
    expect(successColor.trim()).to.equal('80px');
  });

  it('has correct border radius variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-radius-normal', '32px');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-radius-normal'
    );
    expect(successColor.trim()).to.equal('32px');
  });

  it('has correct opacity variable', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    element.style.setProperty('--ackbar-opacity', '.5');
    const successColor = getComputedStyle(element).getPropertyValue(
      '--ackbar-opacity'
    );
    expect(successColor.trim()).to.equal('0.5');
  });
});
