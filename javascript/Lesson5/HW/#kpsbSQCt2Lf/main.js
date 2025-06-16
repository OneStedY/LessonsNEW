const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    return arr;
};
console.log(swap([11, 22, 33, 44], 0, 1));