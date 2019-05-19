// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes jumps while the second takes .

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// Constraints

// Output Format

// Print the minimum number of jumps needed to win the game.

// Sample Input 0

// 7
// 0 0 1 0 0 1 0
// Sample Output 0

// 4
// Explanation 0: 
// Emma must avoid  and . She can win the game with a minimum of  jumps

// Sample Input 1

// 6
// 0 0 0 0 1 0
// Sample Output 1

// 3

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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
//use a while loop, while location < c.length - 1
//when location === c.length - 1 exit while loop
//until then:
    //from location, if location + 2 is a 0, move there
    //else look at location + 1, if a 0, move there
        //at each move, count moves +1
// sample input: 0 0 0 0 1 0
// sample output: 3
    let moves = 0;
    let loc = 0;
    let n = c.length;
    while (loc < n) {
        if (c[loc + 2] === 0) {
            console.log('hi')
            loc += 2;
            moves += 1;
        } else if (c[loc + 1] === 0) {
            loc += 1;
            moves += 1;
        } else {
            loc += 1;
        }
    }
    return moves;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
