const removeFromArray = function(arr, ...removals) {
    return arr.filter(item => !(removals.includes(item)));
};

// Do not edit below this line
module.exports = removeFromArray;
