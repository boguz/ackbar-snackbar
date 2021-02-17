// accepted values
const acceptedTypes = ['auto', 'dismiss'];
const acceptedVariants = ['default', 'success', 'error', 'warning', 'info']

/**
 * Validation schema for the snackbar custom options
 * @type {{
 *  duration: (function(*=): boolean|boolean),
 *  buttonText: (function(*=): boolean),
 *  buttonCallback: (function(*=): boolean),
 *  variant: (function(*=): boolean|boolean),
 *  message: (function(*=): boolean|boolean),
 *  type: (function(*=): boolean|boolean)
 * }}
 */
export const optionsSchema = {
  buttonCallback: (value) => typeof value === 'function',
  buttonText: (value) => !value || typeof value === 'string',
  duration: (value) => typeof value === 'number' && !Number.isNaN(value),
  message: (value) => typeof value === 'string' && value.length > 0,
  type: (value) => typeof value === 'string' && acceptedTypes.includes(value),
  variant: (value) => typeof value === 'string' && acceptedVariants.includes(value)
}

