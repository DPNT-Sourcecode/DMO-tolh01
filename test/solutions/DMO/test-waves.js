var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const waves = require('../../../lib/solutions/DMO/waves');

describe('DMO challenge: Waves characterisation tests', function() {
    let solution;

    beforeEach(function() {
        solution = new waves.Main();
    });

    const runWaves = (numWaves) => {
        const outputSink = new waves.StringOutputSink();
        const inputProvider = {
            fetch: () => numWaves,
            close: () => {}
        }
        solution.run(outputSink, inputProvider);
        return outputSink.content();
    };

    describe('Waves', function() {
        it('original output', async function() {
            assert.equal(runWaves(-1), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n\n");
            assert.equal(runWaves(-20), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n\n");

            assert.equal(runWaves(0), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n\n");
            assert.equal(runWaves(1), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n____....~~~~''''~~~~....____\n");
            assert.equal(runWaves(2), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n__..~~''~~..____..~~''~~..__\n");
            assert.equal(runWaves(3), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~._\n");
            assert.equal(runWaves(4), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~._\n");
            assert.equal(runWaves(5), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~.__.~'~._\n");
            assert.equal(runWaves(6), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~._\n");
            assert.equal(runWaves(7), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~._\n");
            assert.equal(runWaves(8), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~._\n");
            for (let i = 9; i <= 20; i++) {
                assert.equal(runWaves(i), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n\n", "sdfdsf test for input " + i);
            }
        });
    });
});
