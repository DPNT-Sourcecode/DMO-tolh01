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
        it('should output waves', async function() {
            assert.equal(runWaves(1), "____....~~~~''''~~~~....____");
            assert.equal(runWaves(3), "_.~'~.__.~'~.__.~'~._");
            assert.equal(runWaves(4), "_.~'~.__.~'~.__.~'~.__.~'~._");
            assert.equal(runWaves(5), "_.~'~.__.~'~.__.~'~.__.~'~.__.~'~._");
        });
    });
});

