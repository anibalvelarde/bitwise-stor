const bitwiseStore = require('./index');

describe('bitwise-stor methods', () => {

  describe('packArrayBool()', () => {
    const someBitsAreOnAsArray = [
      { bits: [ true, false, true ], expAnswer: 5 },
      { bits: [ true, false, false, false, true ], expAnswer: 17 }
    ];
    const badArrayElements = [
      [ true, false, 2 ], [ false, 'b', 'c' ], [ true, 'this', 'is', 'a', 'test' ]
    ];

    describe('error cases...', () => {
      const notArrayValues = [ undefined, true, 'some-string', 1231, { some: 'object', with: 'data' } ];

      notArrayValues.forEach(badValue => {
        it(`should throw when value is not an array [${typeof badValue}]`, () => {
          expect(() => {
            bitwiseStore.packArrayOfBool(badValue);
          }).toThrow();    
        });
      });

      badArrayElements.forEach(badCase => {
        it('should throw when Array elements do not contain zeroes/ones only', () => {
          expect(() => {
            bitwiseStore.packArrayOfBool(badCase);
          }).toThrow();
        });
      });
    });

    someBitsAreOnAsArray.forEach(testCase => {
      it(`should correctly compute value for [${testCase.bits}] should be ${testCase.expAnswer}`, () => {
        expect(bitwiseStore.packArrayOfBool(testCase.bits)).toBe(testCase.expAnswer);
      });
    });
  });


  describe('packArrayBits()', () => {
    const someBitsAreOnAsArray = [
      { bits: [ 1, 0, 1 ], expAnswer: 5 },
      { bits: [ 1, 0, 0, 0, 1 ], expAnswer: 17 }
    ];
    const badArrayElements = [
      [ 2, 0, 1 ], [ 'a', 'b', 'c' ], [ 'this', 'is', 'a', 'test' ]
    ];

    describe('error cases...', () => {
      const notArrayValues = [ undefined, true, 'some-string', 1231, { some: 'object', with: 'data' } ];

      notArrayValues.forEach(badValue => {
        it(`should throw when value is not an array [${typeof badValue}]`, () => {
          expect(() => {
            bitwiseStore.packArrayOfBit(badValue);
          }).toThrow();    
        });
      });

      badArrayElements.forEach(badCase => {
        it('should throw when Array elements do not contain zeroes/ones only', () => {
          expect(() => {
            bitwiseStore.packArrayOfBit(badCase);
          }).toThrow();
        });
      });
    });

    someBitsAreOnAsArray.forEach(testCase => {
      it(`should correctly compute value for [${testCase.bits}] should be ${testCase.expAnswer}`, () => {
        expect(bitwiseStore.packArrayOfBit(testCase.bits)).toBe(testCase.expAnswer);
      });
    });
  });

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
  });

  describe('unpackArrayOfBit()', () => {
    const testCases = [
      { testValue: 5, expAnswer:  [ 1, 0, 1 ] },
      { testValue: 17, expAnswer: [ 1, 0, 0, 0, 1 ] }
    ]

    testCases.forEach(testCase => {
      it(`should correctly unpack [${testCase.testValue}] to be [${testCase.expAnswer}]`, () => {
        expect(bitwiseStore.unpackArrayOfBit(testCase.testValue))
          .toEqual(testCase.expAnswer);
      });
    });
  });

  describe('unpackArrayOfBool()', () => {
    const testCases = [
      { testValue: 5, expAnswer:  [ true, false, true ] },
      { testValue: 17, expAnswer: [ true, false, false, false, true ] }
    ]

    testCases.forEach(testCase => {
      it(`should correctly unpack [${testCase.testValue}] to be [${testCase.expAnswer}]`, () => {
        expect(bitwiseStore.unpackArrayOfBool(testCase.testValue))
          .toEqual(testCase.expAnswer);
      });
    });
  });
});
