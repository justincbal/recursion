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
    //p(`Starting array = [${arr}]`);
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
    
    // Keep looping until left and right array empty
    while (left.length !== 0 || right.length !== 0) {
        //p(`left ${left} || right ${right}`);

        if (left[0] < right[0]) {
            arr.push(left[0]);
            left.splice(0, 1);
        }
        else if (left[0] > right[0]) {
            arr.push(right[0]);
            right.splice(0, 1);
        }
        else if (left.length === 0 && right.length !== 0) {
            arr.push(right[0]);
            right.splice(0, 1);
        }
        else if(right.length === 0 && left.length !== 0){
            arr.push(left[0]);
            left.splice(0, 1);
        }
        //p(`left ${left} || right ${right}`);
    }

    p(`returning ${arr}`);
    return arr;
}

p(mergeSort([5,2,4,6]));
p(mergeSort([10,45,2,5,8,23]));
p(mergeSort([8,3,55,2,100,4]))