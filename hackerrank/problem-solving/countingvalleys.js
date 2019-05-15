// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Function Description

// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path
// Input Format

// The first line contains an integer , the number of steps in Gary's hike. 
// The second line contains a single string , of  characters that describe his path.

// Constraints

// Output Format

// Print a single integer that denotes the number of valleys Gary walked through during his hike.

// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1
// Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// He enters and leaves one valley.

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

// Complete the countingValleys function below.
function countingValleys(n, s) {
//to consider: a mountain is: any steps above sea level
//and a valley any steps below sea level

//use a sea level gauge.
    //positive numbers are above sea level
    //negative numbers are below sea level: aka a valley
//have a valley count:
    //any time the sea level gauge changes from sea level to valley add one

//iterate over the string
    //if U
        //add to sealevel
    //if D 
        //first check if sea level === 0
            //if yes add to valley count
        //subtract from sea level

    let seaLevel = 0;
    let valleyCount = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            seaLevel += 1;
        } else if (s[i] === 'D') {
            if (seaLevel === 0) {
                valleyCount += 1;
            }
            seaLevel -= 1;
        }
    }
    return valleyCount;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
