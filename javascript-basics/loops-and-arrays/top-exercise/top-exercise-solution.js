
// ==== Exercise ====
// Let’s do some quick practice before your assignment! Rewrite the sumOfTripledEvens(array) function using these three methods. Once you are finished and you’ve tested that your function works correctly, check out the solution below.

// ==== Solution ====

function sumOfTripledEvens(array) {
    return array.filter((num) => num % 2 === 0).map((evenNum) => evenNum * 3).reduce((total, currentNum) => {
        return total + currentNum;
    });
}
console.log(sumOfTripledEvens([1,2,3,4,5,6,7])); // 36
