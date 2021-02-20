export const animations = {
  default: {
    showAnimation: [{ opacity: '0' }, { opacity: '1' }],
    hideAnimation: [{ opacity: '1' }, { opacity: '0' }],
  },
  'slide-in': {
    showAnimation: [
      {
        transform: 'translateX(-100%)',
        opacity: '0',
      },
      {
        transform: 'translateX(0)',
        opacity: '1',
      },
    ],
    hideAnimation: [
      {
        transform: 'translateX(0)',
        opacity: '1',
      },
      {
        transform: 'translateX(-100%)',
        opacity: '0',
      },
    ],
  },
  zoom: {
    showAnimation: [
      {
        transform: 'scale(0)',
        opacity: '0',
      },
      {
        transform: 'scale(1)',
        opacity: '1',
      },
    ],
    hideAnimation: [
      {
        transform: 'scale(1)',
        opacity: '1',
      },
      {
        transform: 'scale(0)',
        opacity: '0',
      },
    ],
  },
};
