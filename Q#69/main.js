// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.
var quotioent_reminder_func = function (val1, val2) {
    var quotient = val1 / val2;
    var reminder = val1 % val2;
    return ("The quotient is ".concat(quotient, " and the reminder is ").concat(reminder));
};
console.log(quotioent_reminder_func(10, 2));
