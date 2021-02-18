import { optionsSchema } from './optionsSchema.js';

/**
 * Validate the snackbar options against the options validation schema.
 * Return an array with an error for each invalid option
 * @param options
 * @returns {Error[]}
 */
export function validateSnackbarOptions(options) {
  return Object.keys(optionsSchema)
    .filter(key => !optionsSchema[key](options[key]))
    .map(key => new Error(`${key} is invalid.`));
}
