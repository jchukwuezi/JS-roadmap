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