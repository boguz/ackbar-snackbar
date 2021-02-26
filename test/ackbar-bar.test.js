import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';

const dispatchTestEvent = (eventName, snackbarOptions = {}) => {
  window.dispatchEvent(
    new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail: snackbarOptions,
    })
  );
};

describe('AckbarSnackbar Bar features', () => {
  it('Can create snackbar bar without options object', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    dispatchTestEvent('ackbar-snackbar-add');
    const bar = element.shadowRoot.querySelector('ackbar-bar');
    expect(bar).to.not.be.undefined;
    expect(bar.nodeName).to.equal('ACKBAR-BAR');
    expect(bar.message).to.equal("Ackbar snackbar: It's a snackbar!");
    expect(bar.getAttribute('id')).to.not.be.undefined;
    expect(bar.getAttribute('size')).to.equal('normal');
    expect(bar.getAttribute('variant')).to.equal('default');
    expect(bar.getAttribute('role')).to.equal('alert');
    expect(bar._showStart).to.not.be.undefined;
  });

  it('Can remove snackbar', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    dispatchTestEvent('ackbar-snackbar-add');

    const bar = element.shadowRoot.querySelector('ackbar-bar');
    dispatchTestEvent('ackbar-snackbar-remove', {
      snackbarID: bar.getAttribute('id'),
    });

    const newBar = element.shadowRoot.querySelector('ackbar-bar');
    expect(bar).to.not.be.undefined;
    expect(newBar).to.be.null;
  });
});
