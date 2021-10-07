![Kontentino - Making social media a piece of cake](https://static.kontentino.com/img/logo/logo.svg)
# array-semantic-join by [Kontentino](https://www.kontentino.com/)

[![](https://github.com/kontentino/array-semantic-join/workflows/Test/badge.svg)](https://github.com/kontentino/array-semantic-join/actions)
[![npm](https://img.shields.io/npm/v/@kontentino/array-semantic-join?style=plastic)](https://www.npmjs.com/package/@kontentino/array-semantic-join)
[![NPM](https://img.shields.io/npm/l/@kontentino/array-semantic-join)](https://github.com/kontentino/array-semantic-join/blob/master/LICENSE)

Helper function whose input is an array and output is a semantic string with joined items of the input array.

## Installation
`$ npm install array-semantic-join`
or
`$ yarn add array-semantic-join`

## Usage
```javascript
import arraySemanticJoin from 'array-semantic-join';

...
    const userNames = ['John', 'Jane', 'Patrick'];

    ...
    <span>
        {arraySemanticJoin(userNames)} // output: "John, Jane and Patrick"
    </span>

    <span>
        {arraySemanticJoin(userNames, { word: 'a' } )} // output: "John, Jane a Patrick"
    </span>

    <span>
        {arraySemanticJoin(userNames, { word: 'und' } )} // output: "John, Jane und Patrick"
    </span>
...
```

## Docs
| Function | 
|:-------------|
| **arraySemanticJoin**(inputArray: *Array*, options?: { word: String }): *String* |
