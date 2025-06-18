function sortnums (nums, direction) {
    if (direction === `ascending`) {
        const sort = nums.sort((a, b) => a - b);
        return sort
    }
    if (direction === `descending`){
        const sort1 = nums.sort((a, b) => b - a);
        return sort1
    }
}

console.log(sortnums([1, 4, 5, 6], `descending`));