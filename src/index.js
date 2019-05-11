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
  VALUE_MUST_BE_POSITIVE: 'Error! Value must be positive.'
}
const bitwiseStore = {}

/**
 * @function pack
 * @param string 
 * @returns number 
 */
bitwiseStore.pack = binaryDigitString => {
  const input = binaryDigitString;

  return 0
}

/**
 * @function unpack
 * @param number
 * @returns string
 */
bitwiseStore.unpack = intValue => {
  if (intValue > UPPER_LIMIT) return ERR.UPPER_LIMIT_EXCEEDED;
  if (intValue < 0) return ERR.VALUE_MUST_BE_POSITIVE;

  return MASK;
}

module.exports = bitwiseStore
