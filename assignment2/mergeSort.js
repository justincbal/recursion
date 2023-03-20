#!/usr/bin/env node

/*
    [5, 2, 1, 6, 8, 7, 4, 3]
    [5, 2, 1, 6] [8, 7, 4, 3]
    [5, 2] [1, 6] [8, 7] [4, 3]
    [5][2] [1][6] [8][7] [4][3]
*/
// Helper
const p = (msg) => console.log(msg);

const testArr = [5, 2, 6, 1, 8, 7, 4, 3];

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    // Divide array in half
    let half = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half, arr.length));

    //p(`Left array: ${left}`);

    return merge(left, right);
}

function merge(left, right) {
    const arr = [];

    

    if (left.length > 1 && right.length > 1) {
    while (left.length !== 0 && right.length !== 0) {
        //p(`LEFT: ${left} || RIGHT: ${right}`);
        // Keep checking comparing first left index to right 
        if (left[0] < right[0]) {
            arr.push(left[0]);
            left.splice(0, 1);
        }
        else if (left[0] > right[0]) {
            arr.push(right[0]);
            right.splice(0, 1);
        }

        // Clean up
        if (left.length === 0 && right.length > 0) {
            arr.push(right[0]);
            right.splice(0, 1);
        }

        if (right.length === 0 && left.length > 0) {
            arr.push(left[0]);
            left.splice(0, 1);
        }

    }
    } else {
        if (left < right) {
            arr.push(left, right);
            }
            else { 
            arr.push(right, left);
            }
    }

    p(`returning: ${arr}`);
    return arr;
}

mergeSort(testArr);