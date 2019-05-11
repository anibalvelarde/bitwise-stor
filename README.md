# bitwise-stor

[![npm (scoped)](https://img.shields.io/npm/v/@aevnpm/bitwise-stor.svg)](https://github.com/anibalvelarde/bitwise-stor)

[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@aevnpm/bitwise-stor.svg)](https://github.com/anibalvelarde/bitwise-stor)

A JavaScript-based library for managing/storing up to 24 Boolean switches within an integer value. 

## Install
```
$ npm install @aevnpm/bitwise-stor
```

## Usage
```js
const bws = require("@aevnpm/bitwise-stor");

// get integer value from boolean string 
const val = bws.pack('101');  // val = 5
```
