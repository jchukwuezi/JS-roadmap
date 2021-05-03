/*Defining a variable: let, var and const */

//formerly var was used
var x = 23;

//In JavaScript ES6, let and const were introduced
if (true){
  let a = 23; //let is limited to the scope of block statement, unlike var.
  //let means the variable could be reassigned
}

//const means that the variable cannot be reassigned
//to be used when the value doesn't change over course of execution
const name = 'Joshua'

function printFirstName(){
  console.log(name);
}

//printFirstName()

let firstName = "Jamie";
const greeting = "Hello ";
//console.log(greeting + firstName);


//updating a value
let totalDebt = 150;
totalDebt = totalDebt + 150;
//console.log(totalDebt);


