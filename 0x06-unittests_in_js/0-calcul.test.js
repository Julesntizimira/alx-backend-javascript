import calculateNumber from './0-calcul.js';
import { assert } from 'chai'

describe("calculateNumber", () => {
    it("", () => {
        assert(calculateNumber(1, 3), 4);
    })
    it("", () => {
        assert(calculateNumber(1, 3.7), 5);
    })
    it("", () => {
        assert(calculateNumber(1.2, 3.7), 5);
    })
    it("", () => {
        assert(calculateNumber(1.5, 3.7), 6);
    })
})
