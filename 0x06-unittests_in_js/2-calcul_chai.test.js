const { expect } = require('chai');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
    it('should return 4 when type is SUM and inputs are 1.6 and 2.4', function () {
        expect(calculateNumber('SUM', 1.6, 2.4)).to.equal(4);
    });
    it('should return 0 when type is SUBTRACT and inputs are 2.5 and 2.5', function () {
        expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
    });
    it('should return 0.2 when type is DIVIDE and inputs are 1 and 5', function () {
        expect(calculateNumber('DIVIDE', 1, 5)).to.equal(0.2);
    });
    it('should return 0 when type is SUM and inputs are 0 and 0', function () {
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
    it('should return Error when type is DIVIDE and inputs are 1 and 0', function () {
        expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("SUM", 1, 2);
        expect(res).to.equal(3);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("SUBTRACT", 1.4, 2.2);
        expect(res).to.equal(-1);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("SUBTRACT", 4.9, 2.7);
        expect(res).to.equal(2);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("DIVIDE", 4, 2);
        expect(res).to.equal(2);
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("DIVIDE", 1.7, 0);
        expect(res).to.equal("Error");
    });
    it(`checking if numbers round`, function () {
        const res = calculateNumber("DIVIDE", 1.4, 4.6);
        expect(res).to.equal(0.2);
    });
});
