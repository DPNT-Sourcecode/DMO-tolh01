'use strict';

class DemoRound1Solution {
    increment(number) {
        return number + 1;
        throw new Error("method not implemented");
    }

    to_uppercase(text) {
        return text.toUpperCase();
        throw new Error("method not implemented");
    }

    letter_to_santa() {
        return "Dear Santa, I have been a good programmer this year. Please bring me more challenges to solve. Sincerely, A Developer.";
        throw new Error("method not implemented");
    }

    count_lines(multilineText) {
        return multilineText.split('\n').length;
        throw new Error("method not implemented");
    }
}

module.exports = DemoRound1Solution;

