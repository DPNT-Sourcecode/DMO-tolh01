class InputProviderScalar {
    constructor(readline = require('readline')) {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        this.buffer = [];
        this.rl.on('line', line => {
            this.buffer.push(line);
        });
    }

    async fetch() {
        if (this.buffer.length > 0) {
            return parseFloat(this.buffer.shift());
        }

        return new Promise(resolve => this.rl.question('', line => resolve(parseFloat(line))));
    }

    close() {
        this.rl.close();
    }
}

class OutputSink {
    write(_) {
        throw new Error('Not implemented');
    }

    newline() {
        throw new Error('Not implemented');
    }
}

class ConsoleOutputSink extends OutputSink {
    write(text) {
        process.stdout.write(text);
    }

    newline() {
        process.stdout.write('\n');
    }
}

class StringOutputSink extends OutputSink {
    constructor() {
        super();
        this.buffer = [];
    }

    write(text) {
        this.buffer.push(text);
    }

    newline() {
        this.buffer.push('\n');
    }

    content() {
        return this.buffer.join('');
    }
}

class Output {
    constructor(sink) {
        this.sink = sink;
        this.currentLineCharCount = 0;
    }

    printExpr(expression) {
        const text = typeof expression === 'number'
            ? expression.toFixed(2).replace(/\.0+$/, '')
            : expression;
        this.sink.write(text);
        this.currentLineCharCount += text.length;
    }

    println() {
        this.sink.newline();
        this.currentLineCharCount = 0;
    }

    tab(numSpaces) {
        return ' '.repeat(Math.round(numSpaces - this.currentLineCharCount));
    }
}

class Main {
    constructor() {}

    asInt(variable) {
        return Math.round(variable);
    }

    mid(text, startingIndex, numChars) {
        return text.substring(this.asInt(startingIndex) - 1, this.asInt(startingIndex) + this.asInt(numChars) - 1);
    }

    textLength(text) {
        return text.length;
    }

    run(outputSink, inputForScalarF) {
        const output = new Output(outputSink);
        try {
            return this.run2(output, inputForScalarF.fetch());
        } catch (e) {
            throw new Error("should not get here")
            output.printExpr(e.message);
            output.println();
        }
    }

    run2(output, numberOfWaves) {
        let label = 1;

        let scalarE = 0;
        let scalarF = 0;
        let scalarI = 0;
        let scalarJ = 0;
        let scalarL = 0;
        let scalarMS = 0;
        let scalarN = 0;
        let scalarS = 0;
        let stringW = "";
        let loopActive11 = false;
        let loopActive10 = false;

        let iterations = 0;

        while (true) {
            iterations += 1;
            if (iterations > 99999) {
                //throw new Error("INFINITE LOOP DETECTED. STOPPING EXECUTION.");
                output.printExpr("INFINITE LOOP DETECTED. STOPPING EXECUTION.");
                output.println();
                label = 9999;
            }

            if (loopActive11 && label > 13) {
                loopActive11 = false;
            }
            if (loopActive10 && label > 14) {
                loopActive10 = false;
            }

            switch (label) {
                // 1PRINT"WAVES"
                case 1:
                    label = 2;
                    output.printExpr("WAVES");output.println();
                    break;
                // 2INPUT"TYPEINHOWMANYWAVESTODRAWASANUMBERBETWEEN1AND4";F:PRINT
                case 2:
                    label = 3;
                    output.printExpr("TYPE IN HOW MANY WAVES TO DRAW AS A NUMBER BETWEEN 1 AND 4?");
                    output.println();
                    scalarF = numberOfWaves;
                    output.println();
                    break;
                // 3W$="____....~~~~''''~~~~....____":E=7:MS=4
                case 3:
                    label = 4;
                    stringW = "____....~~~~''''~~~~....____";
                    scalarE = 7;
                    scalarMS = 4;
                    break;
                // 4L=LEN(W$)
                case 4:
                    label = 5;
                    scalarL = this.textLength(stringW);
                    break;
                // 5N=L/F:S=N/E
                case 5:
                    label = 10;
                    scalarN = scalarL/scalarF;
                    scalarS = scalarN/scalarE;
                    break;
                // 10FORI=1TOFSTEP1
                case 10:
                    label = 11;
                    if (loopActive10 === false) {
                        scalarI = 1;
                        loopActive10 = true;
                    }
                    if ((scalarI - scalarF) * 1 > 0) {
                        label = 90;
                    }
                    break;
                // 11FORJ=1TOLSTEPMS
                case 11:
                    label = 12;
                    if (loopActive11 === false) {
                        scalarJ = 1;
                        loopActive11 = true;
                    }
                    if ((scalarJ - scalarL) * scalarMS > 0) {
                        label = 14;
                    }
                    break;
                // 12PRINTMID$(W$,J,S);
                case 12:
                    label = 13;
                    output.printExpr(this.mid(stringW, scalarJ, scalarS));
                    break;
                // 13NEXTJ
                case 13:
                    label = 14;
                    scalarJ = scalarJ + scalarMS;
                    label = 11;
                    break;
                // 14NEXTI
                case 14:
                    label = 90;
                    scalarI = scalarI + 1;
                    label = 10;
                    break;
                // 90PRINT
                case 90:
                    label = 99;
                    output.println();
                    break;
                // 99END
                case 99:
                    label = 9999;
                    label = 9999;
                    break;
                case 9999:
                    return;
                default:
                    throw new Error(`The label ${label} is not recognized.`);
            }
        }
    }
}

if (require.main === module) {
    /*(async () => {
        const main = new Main();
        const sharedInputProvider = new InputProviderScalar();
        const inputForScalarF = sharedInputProvider;
        try {
            await main.run(new ConsoleOutputSink(), inputForScalarF);
        } finally {
            sharedInputProvider.close();
        }
    })();*/
} else {
    module.exports = { Main, InputProviderScalar, OutputSink, ConsoleOutputSink, StringOutputSink };
}


