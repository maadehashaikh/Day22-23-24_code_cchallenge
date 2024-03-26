// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.

const quotient_remainder_func = (val1:number, val2:number) => {
    let quotient = Math.floor(val1 / val2);
    let remainder = val1 % val2;
    return { quotient: quotient, remainder: remainder };
}
console.log(quotient_remainder_func(10, 3));