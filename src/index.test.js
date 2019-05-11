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

  describe('unpack()', () => {

    it('should return all bits OFF when value is zero.', () => {
      expect(bitwiseStore.unpack(0)).toEqual('000000000000000000000000');
    })
  })
})
