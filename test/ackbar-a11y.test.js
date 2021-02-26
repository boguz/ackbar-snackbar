import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('AckbarSnackbar A11y Features', () => {
  it('ackbar-snackbar has polite aria-live attribute', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    expect(element.getAttribute('aria-live')).to.equal('polite');
  });
});
