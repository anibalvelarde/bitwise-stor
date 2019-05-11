const bitwiseStore = require('./index');

describe('bitwise-stor methods', () => {

  describe('pack()', () => {
    const allBitsAreOff = [ '', '0', '000', '000000000', '000000000000000000000000' ]

    allBitsAreOff.forEach(testCase => {
      
      it(`should correctly identify all bits off for [${testCase}]`, () => {
        expect(bitwiseStore.pack(testCase)).toEqual(0)
      })
    })
  })
})
