var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const DemoRound4n5Solution = require('../../../lib/solutions/DMO/demo_round4n5_solution');

describe('DMO challenge: Demo Round 4 Solution', function() {
    let solution;

    beforeEach(function() {
        solution = new DemoRound4n5Solution();
    });

    describe('waves', function() {
        it('should output', function() {
            assert.equal(solution.waves(5), "sfds");
        });
    });
});
