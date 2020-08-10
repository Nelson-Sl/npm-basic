const { iteratee, transform } = require("lodash")

import {getromanNum} from '../src/romanizer'

describe('romanizer', () => {
    it('should return the roman number of 10', () => {
        const number = 10;
        expect(getromanNum(number)).toEqual('X');
    })
})