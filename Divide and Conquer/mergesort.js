"use strict";

// recursively sort an array of numbers via divide and conquer in O(n log n). Accounts for equal numbers.
var mergeSort = function(array) {
    var arrayLength = array.length;
    if (arrayLength === 1) return array;

    var leftArray = array.slice(0, Math.floor(arrayLength / 2));
    var rightArray = array.slice(arrayLength / 2, arrayLength);

    var sortedLeftArray = mergeSort(leftArray);
    var sortedRightArray = mergeSort(rightArray);
    var result = mergeSortTwoArrays(sortedLeftArray, sortedRightArray);
    return result;
}

var mergeSortTwoArrays = function(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;

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