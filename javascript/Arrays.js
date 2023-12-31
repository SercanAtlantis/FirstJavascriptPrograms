
// Create a function with two arguments that will return an array of the first n multiples of x.

// EXAMPLE

/*countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
    var result = [];
    for (i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
}

let array = countBy(3, 4);
console.log(array);