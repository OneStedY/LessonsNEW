function minValue(numbers){
    let min = numbers[0];
    for (const number of numbers){
        if (number < min){
            min = number
        }
    }
    return min
}
console.log(minValue([354234, 354654654, 546, 65, 342, 45324, 453,5435]))