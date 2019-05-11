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

    it('should throw when value is negative', () => {
      expect(() => bitwiseStore.unpack(-1)).toThrow();
    })

    it('should throw when value is over the limit.', () => {
      expect(() => bitwiseStore.unpack(16777216)).toThrow();
    })

    it('should NOT throw when value is at the limit', () => {
      expect(() => bitwiseStore.unpack(16777215)).not.toThrow();
    })
  })
})
