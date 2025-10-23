'use strict';

class DemoRound2Solution {
    array_sum(listOfIntegers) {
        return listOfIntegers.reduce((a, b) => a + b, 0);
    }

    int_range(start, end) {
        return Array.from({ length: end - start }, (_, i) => i + start);
    }

    filter_pass(listOfIntegers, threshold) {
        return listOfIntegers.filter(num => num >= threshold);
    }
}

module.exports = DemoRound2Solution;
