function swap(arr, index1, index2 ){
    let a1 = arr[index1]; // 11
    arr[index1] = arr[index2]
    arr[index2] = a1
    return arr

}

console.log(swap([11, 22, 33, 44], 0, 2));