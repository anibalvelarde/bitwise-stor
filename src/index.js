/**
 * Main JS file for this library.
 *
 * All methods for bitwise-stor are defined within this file.
 *
 * @link   https://github.com/anibalvelarde/bitwise-stor
 * @file   This files defines the bitwiseStor class.
 * @author AnibalVelarde.
 * @since  0.1.1
 */
const UPPER_LIMIT = 16777215;
const MASK = '000000000000000000000000';
const ERR = {
  UPPER_LIMIT_EXCEEDED: 'Error! Upper limit exceeded.',
  VALUE_MUST_BE_POSITIVE: 'Error! Value must be positive.',
  VALUE_MUST_BE_STRING: 'Error! Value must be a string.',
  VALUE_MUST_BE_NUMERIC: 'Error! Value must be a number.',
  VALUE_MUST_BE_ARRAY: 'Error! Value must be an Array.',
  ARRAY_ELEMENTS_MUST_BE_ZERO_OR_ONE: 'Error! Element of bits array must be zero or 1'
}
const bitwiseStore = {}

/**
 * @function pack
 * @param string 
 * @returns number 
 */
bitwiseStore.pack = binaryDigitString => {
  if (typeof binaryDigitString !== 'string') throw new Error(ERR.VALUE_MUST_BE_STRING);
  if (binaryDigitString.length === 0) return 0;

  return parseInt(binaryDigitString, 2);
}

/**
 * @function unpack
 * @param number
 * @returns string
 */
bitwiseStore.unpack = intValue => {
  if (typeof intValue !== 'number') throw new Error(ERR.VALUE_MUST_BE_NUMERIC);
  if (intValue > UPPER_LIMIT) throw new Error(ERR.UPPER_LIMIT_EXCEEDED);
  if (intValue < 0) throw new Error(ERR.VALUE_MUST_BE_POSITIVE);
  if (intValue === 0) return MASK;

  return intValue.toString(2);
}

/**
 * @function packArray
 * @param array of numbers: 0's or 1's
 * @returns number
 */
bitwiseStore.packArray = bitArray => {
  if (!Array.isArray(bitArray)) throw new Error(ERR.VALUE_MUST_BE_ARRAY);
  if (bitArray.some(i => (i !== 0 && i !== 1))) throw new Error(ERR.ARRAY_ELEMENTS_MUST_BE_ZERO_OR_ONE);

  return bitwiseStore.pack(bitArray.join(''));
}

module.exports = bitwiseStore
