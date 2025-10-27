'use strict';
const waves = require('./waves')

class DemoRound4n5Solution {
    waves(numberOfWaves) {
        const main = new waves.Main();
        return main.makeWaves(numberOfWaves);
    }

    orig_waves(numberOfWaves) {
        const InputProvider = {
            fetch: () => numberOfWaves, //Promise.resolve(numberOfWaves),
            close: () => {}
        }

        const main = new waves.Main();
        const output = new waves.StringOutputSink();
        main.run(output, InputProvider);
        const lines = output.content().split("\n");
        //return last non-empty line
        for (let i = lines.length - 1; i >= 0; i--) {
            if (lines[i].trim() !== '') {
                return lines[i];
            }
        }
        return "";
    }
}

module.exports = DemoRound4n5Solution;

