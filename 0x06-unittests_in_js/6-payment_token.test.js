const getPaymentTokenFromAPI = require("./6-payment_token");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function () {
    it("Async testing. Note the done()", function (done) {
        getPaymentTokenFromAPI(true)
            .then((data) => {
                expect(data).to.have.property('data');
                done();
            });
    });
});
