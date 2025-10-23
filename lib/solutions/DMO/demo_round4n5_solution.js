'use strict';
const waves = require('./waves')

class DemoRound4n5Solution {
    waves(numberOfWaves) {
        const InputProvider = {
            fetch: () => numberOfWaves,
            close: () => {}
        }

        const main = new waves.Main();
        const response = main.run(new waves.StringOutputSink(), InputProvider);
        return response.getContents();
    }
}

module.exports = DemoRound4n5Solution;
