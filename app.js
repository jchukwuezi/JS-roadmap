/* statement vs experssion */

//expression: code that is evaluated to produce a value
 2+5;   

//statement: code that has an effect (they are executed to make something happen)
let welcome = 'Hello';

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


//conditionial with if statements
function messageForNumber(number){
  if (number <= 3){
    return "This is a small number";
  }

  else if (number > 3 || number <= 7 ) {
    return "This is a medium number";
  }

  else if (number > 7){
    return "This is a large number";
  }

}
//console.log(messageForNumber(5));

//while loops
let number = 0;
while (number <= 12){ //while this number is less than 12
  console.log(number); //number will be printed out
  number = number + 2; //value of number is being updated
}

//for loop and breaking out of a loop
for (let current = 20; ;current = current + 1){ //';;' here means while (true), it will never break
    if (current % 7 ==0){ //if the current value is divisible by 7
      console.log("Current value : " + current);
      break; //it will break out of the loop after printing out the current value
    }
}

//switch statement

//it is picking a random number from an array of 5 numbers and depending on the number selected, it will return a statement
function findSibling(){
  const numbers = [1, 2, 3, 4];
  //using random function from Math class to select random element from array
  let random = numbers[Math.floor(Math.random() * numbers.length)];

  switch (random){
    case 1: 
      console.log('Sibling 1');
    case 2:
      console.log('Sibling 2');
    case 3:
      console.log('Sibling 3');
    case 4:
      console.log('Sibling 4');
  }

}

findSibling();



