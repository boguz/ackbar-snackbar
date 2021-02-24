// accepted values
const acceptedAnimationNames = ['default', 'slide-in', 'zoom'];
const acceptedSizes = ['small', 'normal', 'large'];
const acceptedTypes = ['auto', 'dismiss'];
const acceptedVariants = ['default', 'success', 'error', 'warning', 'info'];

/**
 * Validation schema for the snackbar custom options
 * @type {{
 *   animationDuration: (function(*=): boolean),
 *   customClasses: (function(*=): boolean),
 *   duration: (function(*=): boolean|boolean),
 *   animationName: (function(*=): boolean|boolean),
 *   buttonText: (function(*=): boolean),
 *   size: (function(*=): boolean|boolean),
 *   buttonCallback: (function(*=): boolean),
 *   hideCallback: (function(*=): boolean),
 *   variant: (function(*=): boolean|boolean),
 *   message: (function(*=): boolean|boolean),
 *   type: (function(*=): boolean|boolean),
 *   accessibilityLabel: (function(*=): boolean)
 * }}
 */
export const optionsSchema = {
  accessibilityLabel: value => !value || typeof value === 'string',
  animationDuration: value => !value || typeof value === 'number',
  animationName: value =>
    !value ||
    (typeof value === 'string' && acceptedAnimationNames.includes(value)),
  buttonCallback: value => !value || typeof value === 'function',
  buttonText: value => !value || typeof value === 'string',
  customClasses: value => !value || typeof value === 'string',
  duration: value =>
    !value || (typeof value === 'number' && !Number.isNaN(value)),
  hideCallback: value => !value || typeof value === 'function',
  message: value => !value || (typeof value === 'string' && value.length > 0),
  showCallback: value => !value || typeof value === 'function',
  size: value =>
    !value || (typeof value === 'string' && acceptedSizes.includes(value)),
  type: value =>
    !value || (typeof value === 'string' && acceptedTypes.includes(value)),
  variant: value =>
    !value || (typeof value === 'string' && acceptedVariants.includes(value)),
};
