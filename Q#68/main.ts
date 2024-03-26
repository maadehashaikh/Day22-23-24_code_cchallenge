// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
const multiplying_decimals = (val1:number,val2:number) =>{
   return (val1*val2);
}
console.log(multiplying_decimals(4.27677,2.198077).toFixed(2));