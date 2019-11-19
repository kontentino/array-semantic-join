'use-strict';

module.exports = function(inputArray){
    if (!Array.isArray(inputArray)) {
        console.warn(`Wrong argument in function arraySemanticJoin. Expect Array instead of ${typeof inputArray}`);
        return '';
    }

    if (inputArray.length === 0) {
        return '';
    } else if (inputArray.length === 1) {
        return inputArray[0];
    }

    return inputArray.slice(0, -1).join(', ') + ' and\u00A0' + inputArray.slice(-1);
}
