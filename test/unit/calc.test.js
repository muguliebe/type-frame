"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../../src/util/calc");
describe('calc Basic', () => {
    it('normal', () => {
        expect((0, calc_1.add)(1, 1)).toEqual(2);
    });
});
