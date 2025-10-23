'use strict';

class DemoRound1Solution {
    increment(number) {
        return number + 1;
    }

    to_uppercase(text) {
        return text.toUpperCase();
    }

    letter_to_santa() {
        return "Dear Santa, I have been a good programmer this year. Please bring me more challenges to solve. Sincerely, A Developer.";
    }

    count_lines(multilineText) {
        return multilineText.split('\n').length;
    }
}

module.exports = DemoRound1Solution;

