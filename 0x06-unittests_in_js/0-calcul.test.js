const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
const { it, describe } = require("mocha");

describe('calculateNumber', function () {
    it('should return 4 when inputs are 1.6 and 2.4', function () {
        assert.strictEqual(calculateNumber(1.6, 2.4), 4);
    });
    it('should return 6 when inputs are 2.5 and 2.5', function () {
        assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    });
    it('should return -4 when inputs are -2.5 and -2.5', function () {
        assert.strictEqual(calculateNumber(-2.5, -2.5), -4);
    });
    it('should return 0 when inputs are 0 and 0', function () {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
});
