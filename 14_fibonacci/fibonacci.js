const fibonacci = function(a) {
    if (+a == 0) return 0;
    if (+a < 0) return "OOPS";
    let prev = 0;
    let total = 1;
    for (let i = 2; i <= +a; i++) {
        [prev, total] = [total, prev + total];
    }
    return total;
};

/* i p t
   2 1 1
   3 1 2
   4 2 3

*/

// Do not edit below this line 
module.exports = fibonacci;
