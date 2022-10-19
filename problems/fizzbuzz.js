/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    const result=[];
    for (let step = 0; step < n; step++) {
        if ((step+1)%3===0 && (step+1)%5===0) {
            result.push("FizzBuzz")
        } else if ((step+1)%3===0){
            result.push("Fizz")
        } else if ((step+1)%5===0){
            result.push("Buzz")
        } else {
            result.push(`${step+1}`)
        }
    }
    return result;
};