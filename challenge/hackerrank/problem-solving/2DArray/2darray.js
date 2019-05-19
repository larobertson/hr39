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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
//starting from the top left corner
    //iterate over the matrix looking for hourglasses
    //hourglass will be:
        //starting point + 3 column-wise in first row
        //move down one row, and forward one column
        //move down two rows, count point + 2
    //sum all of those together, you ge an hourglass sum
    //store in an array
//loop through storage array and return the largest value
    //set highest = 0
    //if storage[i] > highest
        //highest = storage[i]

    
    let sums = [];

    for (let row = 0; row < arr.length - 2; row++) {
        for (let col = 0; col < arr[0].length - 2; col++) {
            let top = arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
            let bottom = arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
            let sum = top + bottom + arr[row + 1][col + 1];
            sums.push(sum);
        }
    }

    let highest = sums[0];
    for (let i = 0; i < sums.length; i++) {
        if (sums[i] >= highest) {
            highest = sums[i];
        }
    }
    return highest;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
