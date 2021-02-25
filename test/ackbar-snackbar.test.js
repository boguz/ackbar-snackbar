import { html, fixture, expect } from '@open-wc/testing';

import '../index.js';
import { arraysMatch } from '../src/js/arraysMatch.js';

const snackbarPositions = [
  {
    name: 'top left',
    pos: {
      top: '16px',
      left: '16px'
    }
  },
  {
    name: 'top center',
    pos: {
      top: '16px',
      left: '50%'
    }
  },
  {
    name: 'top right',
    pos: {
      top: '16px',
      right: '16px'
    }
  },
  {
    name: 'middle left',
    pos: {
      top: '50%',
      left: '16px'
    }
  },
  {
    name: 'middle center',
    pos: {
      top: '50%',
      left: '50%'
    }
  },
  {
    name: 'middle right',
    pos: {
      top: '50%',
      right: '16px'
    }
  },
  {
    name: 'bottom left',
    pos: {
      bottom: '16px',
      left: '16px'
    }
  },
  {
    name: 'bottom center',
    pos: {
      bottom: '16px',
      left: '50%'
    }
  },
  {
    name: 'bottom right',
    pos: {
      bottom: '16px',
      right: '16px'
    }
  },
];

const newSnackbarProperties = [
  'accessibilityLabel',
  'animationDuration',
  'animationName',
  'buttonCallback',
  'buttonText',
  'duration',
  'hideCallback',
  'message',
  'showCallback',
  'type',
  'hasFadedIn',
];

const newSnackbarAttributes = ['id', 'size', 'variant'];

describe('AckbarSnackbar', () => {
  it('ackbar-snackbar has correct node name', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    expect(element.nodeName).to.equal('ACKBAR-SNACKBAR');
  });

  it('ackbar-snackbar starts without children', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    expect(element.firstChild).to.equal(null);
  });

  it('ackbar-snackbar has correct default position', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const bottomValue = getComputedStyle(element).getPropertyValue('bottom');
    const leftValue = getComputedStyle(element).getPropertyValue('left');
    expect(bottomValue).to.equal('16px');
    expect(leftValue).to.equal('16px');
  });

  snackbarPositions.forEach((position) => {
    it(`ackbar-snackbar has correct position ${position.name}`, async () => {
      const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
      element.setAttribute('position', position.name)

      for (const [posName, posValue] of Object.entries(position.pos)) {
        const positionValue = getComputedStyle(element).getPropertyValue(posName);
        let correctValue = posValue;
        if ((posName === 'top' || posName === 'bottom') && posValue === '50%') {
          correctValue = `${window.innerHeight / 2}px`
        } else if ((posName === 'left' || posName === 'right') && posValue === '50%') {
          correctValue = `${window.innerWidth / 2}px`
        }
        expect(positionValue).to.equal(correctValue);
      }
    });
  });

  it('ackbar-snackbar adds all properties', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const snackbarNewPropertiesArray = element.newSnackbarProperties;
    expect(arraysMatch(snackbarNewPropertiesArray, newSnackbarProperties)).to.be.true;
  });

  it('ackbar-snackbar adds all attributes', async () => {
    const element = await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    const snackbarNewAttributesArray = element.newSnackbarAttributes;
    expect(arraysMatch(snackbarNewAttributesArray, newSnackbarAttributes)).to.be.true;
  });

  it('ackbar-snackbar dispatches ready event', async () => {
    let gotReadyEvent = false;
    // eslint-disable-next-line no-return-assign
    window.addEventListener(('ackbar-snackbar-ready'), () => gotReadyEvent = true )
    await fixture(html`<ackbar-snackbar></ackbar-snackbar>`);
    expect(gotReadyEvent).to.be.true;
  });
});
