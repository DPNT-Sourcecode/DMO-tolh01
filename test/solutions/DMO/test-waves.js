var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const DemoRound4n5Solution = require('../../../lib/solutions/DMO/demo_round4n5_solution');

describe('DMO challenge: Waves characterisation tests', function() {
    let solution;

    beforeEach(function() {
        solution = new DemoRound4n5Solution();
    });

    describe('Waves', function() {
        it('should output waves', async function() {
            assert.equal(solution.waves(1), "____....~~~~''''~~~~....____");
            assert.equal(solution.waves(3), "_.~'~.__.~'~.__.~'~._");
            assert.equal(solution.waves(4), "_.~'~.__.~'~.__.~'~.__.~'~._");
            assert.equal(solution.waves(5), "_.~'~.__.~'~.__.~'~.__.~'~.__.~'~._");
        });
    });
});
