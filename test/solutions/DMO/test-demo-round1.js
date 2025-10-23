var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const DemoRound1Solution = require('../../../lib/solutions/DMO/demo_round1_solution');

describe('DMO challenge: Demo Round 1 Solution', function() {
    let solution;
    
    beforeEach(function() {
        solution = new DemoRound1Solution();
    });

    describe('increment function', function() {
        it('should increment a positive number by 1', function() {
            assert.equal(solution.increment(5), 6);
        });

        it('should increment zero by 1', function() {
            assert.equal(solution.increment(0), 1);
        });

        it('should increment a negative number by 1', function() {
            assert.equal(solution.increment(-3), -2);
        });

        it('should handle decimal numbers', function() {
            assert.equal(solution.increment(2.5), 3.5);
        });
    });

    describe('to_uppercase function', function() {
        it('should convert lowercase text to uppercase', function() {
            assert.equal(solution.to_uppercase('hello'), 'HELLO');
        });

        it('should handle mixed case text', function() {
            assert.equal(solution.to_uppercase('Hello World'), 'HELLO WORLD');
        });

        it('should handle already uppercase text', function() {
            assert.equal(solution.to_uppercase('HELLO'), 'HELLO');
        });

        it('should handle empty string', function() {
            assert.equal(solution.to_uppercase(''), '');
        });

        it('should handle text with numbers and symbols', function() {
            assert.equal(solution.to_uppercase('hello123!@#'), 'HELLO123!@#');
        });
    });

    describe('letter_to_santa function', function() {
        it('should return a predefined letter to Santa', function() {
            const expectedLetter = "Dear Santa, I have been a good programmer this year. Please bring me more challenges to solve. Sincerely, A Developer.";
            assert.equal(solution.letter_to_santa(), expectedLetter);
        });

        it('should return the same letter every time', function() {
            const letter1 = solution.letter_to_santa();
            const letter2 = solution.letter_to_santa();
            assert.equal(letter1, letter2);
        });

        it('should return a string', function() {
            assert.equal(typeof solution.letter_to_santa(), 'string');
        });
    });

    describe('count_lines function', function() {
        it('should count lines in multiline text', function() {
            const multilineText = "line1\nline2\nline3";
            assert.equal(solution.count_lines(multilineText), 3);
        });

        it('should count single line as 1', function() {
            assert.equal(solution.count_lines('single line'), 1);
        });

        it('should handle empty string as 1 line', function() {
            assert.equal(solution.count_lines(''), 1);
        });

        it('should handle text ending with newline', function() {
            const textWithEndingNewline = "line1\nline2\n";
            assert.equal(solution.count_lines(textWithEndingNewline), 3);
        });

        it('should handle text with multiple consecutive newlines', function() {
            const textWithEmptyLines = "line1\n\n\nline4";
            assert.equal(solution.count_lines(textWithEmptyLines), 4);
        });

        it('should handle Windows-style line endings (CRLF)', function() {
            const windowsText = "line1\r\nline2\r\nline3";
            // Note: split('\n') will still work with \r\n, creating empty parts
            // This test shows the actual behavior
            assert.equal(solution.count_lines(windowsText), 3);
        });
    });
});