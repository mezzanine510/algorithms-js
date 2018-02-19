const fs = require('fs');

// Recursively sort an array of numbers via divide and conquer
// Count the number of split inversions by piggybacking on mergesort

file
let totalInversions = 0;

const mergeSort = (array) => {
    const arrayLength = array.length;
    if (arrayLength === 1) return array;

    const leftArray = array.slice(0, Math.floor(arrayLength / 2));
    const rightArray = array.slice(arrayLength / 2, arrayLength);

    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);
    const result = mergeAndCountSplitInversions(sortedLeftArray, sortedRightArray);
    return result;
}

const mergeAndCountSplitInversions = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];

    while (leftIndex < left.length || rightIndex < right.length) {
        if (left[leftIndex] === right[rightIndex]) {
            result.push(left[leftIndex], right[rightIndex]);
            leftIndex++, rightIndex++;
        } 
        else if (left[leftIndex] < right[rightIndex] || right[rightIndex] === undefined) {
            result.push(left[leftIndex]);
            leftIndex++;
        } 
        else if (right[rightIndex] < left[leftIndex]) {
            result.push(right[rightIndex]);
            totalInversions += left.length - leftIndex;
            rightIndex++;
        }
        else if (left[leftIndex] === undefined) {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result;
}

const myArray = fs.

mergeSort(myArray);
console.log(totalInversions);