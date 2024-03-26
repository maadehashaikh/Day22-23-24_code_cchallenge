// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
var number1 = 30;
number1 = 100;
console.log(number1);
var number2 = 20;
number2 = 70;
console.log(number2);
