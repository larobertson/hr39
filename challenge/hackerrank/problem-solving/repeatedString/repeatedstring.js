'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
//given a string s
    //repeat it, until it reaches length n

//declare a aCount = 0
//first find the length of the string
//iterate over the string, count the number of a's
//then repeats = n / string.length * aCount
//then find n % string.length, then iterate over the string
    //count the number of a's, add to repeats
//return repeats
    let aCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aCount += 1;
        }
    }

    let repeats = Math.floor(n / s.length) * aCount;
    let r = n % s.length;
    for (let j = 0; j < r; j++) {
        if (s[j] === 'a') {
            repeats += 1;
        }
    }
    return repeats;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
