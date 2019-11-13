import arraySemanticJoin from './index.js';

const WRONG_ARG_OBJECT = {name: "John"};
const WRONG_ARG_STRING = "John";
const WRONG_ARG_NULL = null;
const WRONG_ARG_UNDEFINED = undefined;
const EMPTY_ARRAY = [];
const ONE_ITEM_ARRAY = ["John"];
const TWO_ITEMS_ARRAY = ["John", "Jane"];
const MORE_ITEMS_ARRAY = ["John", "Jane", "Paul", "Patrick"];

describe("Test function: arraySemanticJoin", () => {
    test("Wrong type of argument: Object", () => {
        expect(arraySemanticJoin(WRONG_ARG_OBJECT)).toBe('');
    });

    test("Wrong type of argument: String", () => {
        expect(arraySemanticJoin(WRONG_ARG_STRING)).toBe('');
    });

    test("Wrong type of argument: null", () => {
        expect(arraySemanticJoin(WRONG_ARG_NULL)).toBe('');
    });

    test("Wrong type of argument: undefined", () => {
        expect(arraySemanticJoin(WRONG_ARG_UNDEFINED)).toBe('');
    });

    test("Empty input array", () => {
        expect(arraySemanticJoin(EMPTY_ARRAY)).toBe('');
    });

    test("One item in input array", () => {
        expect(arraySemanticJoin(ONE_ITEM_ARRAY)).toBe('John');
    });

    test("Two items in input array", () => {
        expect(arraySemanticJoin(TWO_ITEMS_ARRAY)).toBe('John and\u00A0Jane');
    });

    test("More items in input array", () => {
        expect(arraySemanticJoin(MORE_ITEMS_ARRAY)).toBe('John, Jane, Paul and\u00A0Patrick');
    });
});