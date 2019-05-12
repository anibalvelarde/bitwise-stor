const bitwiseStore = require('./index');

describe('bitwise-stor methods', () => {

  describe('pack()', () => {
    const allBitsAreOff = [
      '', '0', '000', '000000000',
      '000000000000000000000000'
    ];
    const allBitsAreOn = [
      { bits: '1', expAnswer: 1 },
      { bits: '11', expAnswer: 3 },
      { bits: '11111', expAnswer: 31 },
      { bits: '1111111111', expAnswer: 1023 },
      { bits: '111111111111111111111111', expAnswer: 16777215 }
    ];
    const someBitsAreOn = [
      { bits: '101010101010101010101011', expAnswer: 11184811 }
    ]
    allBitsAreOff.forEach(testCase => {
      it(`should correctly identify all bits off for [${testCase}]`, () => {
        expect(bitwiseStore.pack(testCase)).toEqual(0)
      });
    });

    allBitsAreOn.forEach( testCase => {
      it(`should correctly identify all bits on for [${testCase.bits} = ${testCase.expAnswer}]`, () => {
        expect(bitwiseStore.pack(testCase.bits)).toEqual(testCase.expAnswer);
      });
    });

    it('should throw when value is not a string', () => {
      expect(() => bitwiseStore.pack(123)).toThrow();
    });

    someBitsAreOn.forEach(testCase => {
      it(`should correctly compute bits for [${testCase.bits} = ${testCase.expAnswer}]`, () => {
        expect(bitwiseStore.pack(testCase.bits)).toEqual(testCase.expAnswer);
      });
    });    
  });

  describe('unpack()', () => {
    const someBitsAreOn = [
      { expBits: '101010101010101010101011', value: 11184811 },
      { expBits: '101110101110100110101000', value: 12249512  },
      { expBits: '101', value: 5 },
      { expBits: '10000000', value: 128 },
      { expBits: '10000001', value: 129 },
      { expBits: '101010101010101011', value: 174763  }
    ];

    someBitsAreOn.forEach(testCase => {
      it(`should calculate correctly for [${testCase.value} = ${testCase.expBits}]`, () => {
        expect(bitwiseStore.unpack(testCase.value)).toEqual(testCase.expBits);
      });
    });

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

    it('should throw when value is not numeric', () => {
      expect(() => bitwiseStore.unpack('abcdefg')).toThrow();
    });
  })
})
