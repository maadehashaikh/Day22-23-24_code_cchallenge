// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.
{
  let letBlock:string = "Checking let variable scope "; 
  const constBlock :string  = "Checking let variable scope "
  console.log(letBlock); 
  console.log(constBlock); 
}
try {
  console.log(letBlock); 
} catch (error) {
  console.log("Let Block is not accessible outside the block.");
}
try {
  console.log(constBlock); // This will also fail
} catch (error) {
  console.log("Const Block is not accessible outside the block.");
}
