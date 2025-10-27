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

    const runWaves = async (numWaves) => {
        const outputSink = new waves.StringOutputSink();
        const inputProvider = {
            fetch: () => Promise.resolve(numWaves),
            close: () => {}
        }
        await solution.run(outputSink, inputProvider);
        return outputSink.content();
    };

    describe('Waves', function() {
        it('original output with async I/O', async function() {
            assert.equal(await runWaves(-1), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n\n");
            assert.equal(await runWaves(-20), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n\n");

            assert.equal(await runWaves(0), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n\n");
            assert.equal(await runWaves(1), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n____....~~~~''''~~~~....____\n");
            assert.equal(await runWaves(2), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n__..~~''~~..____..~~''~~..__\n");
            assert.equal(await runWaves(3), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~._\n");
            assert.equal(await runWaves(4), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~._\n");
            assert.equal(await runWaves(5), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~.__.~'~._\n");
            assert.equal(await runWaves(6), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~._\n");
            assert.equal(await runWaves(7), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~._\n");
            assert.equal(await runWaves(8), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n_.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~.__.~'~._\n");
            for (let i = 9; i <= 20; i++) {
                assert.equal(await runWaves(i), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\n\n", "sdfdsf test for input " + i);
            }
            assert.equal(await runWaves(99999), "WAVES\nTYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?\n\nINFINITE LOOP DETECTED. STOPPING EXECUTION.\n");

        });

        it('can create waves without need for I/O', async function() {
            assert.equal(solution.makeWaves(1), "____....~~~~''''~~~~....____");
            assert.equal(solution.makeWaves(3), "_.~'~.__.~'~.__.~'~._");
            assert.equal(solution.makeWaves(4), "_.~'~.__.~'~.__.~'~.__.~'~._");
            assert.equal(solution.makeWaves(5), "_.~'~.__.~'~.__.~'~.__.~'~.__.~'~._");
        });
    });
});



