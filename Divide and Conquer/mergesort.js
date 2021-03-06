"use strict";

// recursively sort an array of numbers via divide and conquer in O(n log n).

const mergeSort = function(array) {
    const arrayLength = array.length;
    if (arrayLength === 1) return array;

    const leftArray = array.slice(0, Math.floor(arrayLength / 2));
    const rightArray = array.slice(arrayLength / 2, arrayLength);

    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);
    const result = mergeSortTwoArrays(sortedLeftArray, sortedRightArray);
    return result;
}

const mergeSortTwoArrays = function(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length || rightIndex < right.length) {
        if (left[leftIndex] === right[rightIndex]) {
            result.push(left[leftIndex], right[rightIndex]);
            leftIndex++, rightIndex++;
        } 
        else if (left[leftIndex] < right[rightIndex] || right[rightIndex] === undefined) {
            result.push(left[leftIndex]);
            leftIndex++;
        } 
        else if (right[rightIndex] < left[leftIndex] || left[leftIndex] === undefined) {
            result.push(right[rightIndex]);
            rightIndex++;
        } 
        else break;
    }

    return result;
}