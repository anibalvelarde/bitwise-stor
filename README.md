# bitwise-stor

[![npm (scoped)](https://img.shields.io/npm/v/@aevnpm/bitwise-stor.svg)](https://www.npmjs.com/package/@aevnpm/bitwise-stor)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@aevnpm/bitwise-stor.svg)](https://www.npmjs.com/package/@aevnpm/bitwise-stor)
[![GitHub license](https://img.shields.io/github/license/anibalvelarde/bitwise-stor.svg)](https://github.com/anibalvelarde/bitwise-stor/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/anibalvelarde/bitwise-stor.svg)](https://github.com/anibalvelarde/bitwise-stor/issues)

A JavaScript-based library for managing/storing up to 24 Boolean switches within an integer value. 

## Install
```
$ npm install @aevnpm/bitwise-stor
```

## Usage
### Simple cases:
`pack()` & `unpack()` with primitive value manipulation:
```js
const bws = require("@aevnpm/bitwise-stor");

// get integer value from boolean string 
const val = bws.pack('101');  // val = 5

// get a binary digit string (right-most-significant) from an integer
const bits = bws.unpack(val); // bits = '101'
```

### Array cases:  -- Future Roadmap --
`packArray()` & `unpackArray()` with, you guessed it, `Array` types
```js
const bws = require("@aevnpm/bitwise-stor");

// get integer value from boolean string 
const val = bws.packArray([1, 0, 1]);  // val = 5

// get a binary digit string (right-most-significant) from an integer
const bits = bws.unpackArray(val); // bits = [1, 0, 1]
```
