# mirror-to-object-pairs

[![npm](https://img.shields.io/npm/v/mirror-to-object-pairs.svg?style=plastic)](https://npmjs.com/package/mirror-to-object-pairs)

> Mirrors array elements as pairs of object key/value with typings.

## Installation

If you prefer npm:

```bash
npm i --save mirror-to-object-pairs
```

If yarn is your way to go:

```bash
yarn add mirror-to-object-pairs
```

## Usage

To get started, just import package and provide it an array of keys.
It will generate you paris in object with key/value of each element of passed array.

```js
import mirror from 'mirror-to-object-pairs';

const pairs = mirror([
  'FIRST',
  'SECOND',
  'third',
]);

console.log(pairs.FIRST) // 'FIRST'
console.log(pairs.SECOND) // 'SECOND'
console.log(pairs.third) // 'third'
```

Library provides typings so it works perfectly with TypeScript projects.

## License

[MIT](LICENSE) © Terry Sahaidak
