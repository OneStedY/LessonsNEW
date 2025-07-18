Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};


const users = ['Anna', 'Bohdan', 'Ira'];

users.forEach((user, index) => {
    console.log(`User ${index + 1}: ${user}`);
});

Array.prototype.filter = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

const nums = [3, 7, 10, 15, 2, 8];

const HigherThanFive = nums.filter(num => num > 5);
console.log(HigherThanFive);