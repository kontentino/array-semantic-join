'use-strict';

var defaultOptions = {
    word: 'and'
}

module.exports = function (inputArray, options) {

    if (!Array.isArray(inputArray)) {
        console.warn(`Wrong argument in function arraySemanticJoin. Expect Array instead of ${typeof inputArray}`);
        return '';
    }

    if (options && typeof options.word !== 'string') {
        console.warn(`Wrong options argument used. Expected Object with property 'word' as string instead of ${typeof options.word}`);
        return '';
    }

    options = options || defaultOptions

    if (inputArray.length === 0) {
        return '';
    } else if (inputArray.length === 1) {
        return inputArray[0];
    }

    return inputArray.slice(0, -1).join(', ') + ' ' + options.word + '\u00A0' + inputArray.slice(-1);
}
