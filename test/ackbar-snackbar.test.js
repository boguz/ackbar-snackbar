import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';

describe('AckbarSnackbar', () => {
  it('ackbar-snackbar has correct node name', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    expect(element.nodeName).to.equal('ACKBAR-SNACKBAR');
  });

  it('ackbar-snackbar start without children', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    expect(element.firstChild).to.equal(null);
  });
  //
  // it('increases the counter on button click', async () => {
  //   const el = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
  //   el.shadowRoot.querySelector('button').click();
  //
  //   expect(el.counter).to.equal(6);
  // });
  //
  // it('can override the title via attribute', async () => {
  //   const el = await fixture(html`<ackbar-snackbar title="attribute title"></ackbar-snackbar>`);
  //
  //   expect(el.title).to.equal('attribute title');
  // });
  //
  // it('passes the a11y audit', async () => {
  //   const el = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
  //
  //   await expect(el).shadowDom.to.be.accessible();
  // });
});
