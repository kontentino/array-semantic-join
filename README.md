![Kontentino - Making social media a piece of cake](https://static.kontentino.com/img/logo/logo.svg)
# array-semantic-join by [Kontentino](https://www.kontentino.com/)

![](https://github.com/kontentino/array-semantic-join/workflows/Test/badge.svg)
![npm](https://img.shields.io/npm/v/@kontentino/array-semantic-join?style=plastic)

Helper function whose input is an array and output is a semantic string with joined items of the input array.

## Installation
`$ npm install @kontentino/array-semantic-join`
or
`$ yarn add @kontentino/array-semantic-join`

## Usage
```javascript
import arraySemanticJoin from '@kontentino/array-semantic-join';

...
    const userNames = ['John', 'Jane', 'Patrick'];

    ...

    <span>
        {arraySemanticJoin(userNames)} // output: "John, Jane and Patrick"
    </span>
...
```

## Docs
| Function | 
|:-------------|
| **arraySemanticJoin**(inputArray: *Array*): *String* |
