'use strict';
const waves = require('./waves')

class DemoRound4n5Solution {
    async waves(numberOfWaves) {
        const InputProvider = {
            fetch: () => Promise.resolve(numberOfWaves),
            close: () => {}
        }

        const main = new waves.Main();
        const output = new waves.StringOutputSink();
        await main.run(output, InputProvider);
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


