//function declaration
function greet(){
    console.log('hello there');
}

//function expression, storing a function in a variable
const speak = function(){
    console.log('good day');
};

//calling the functions
//greet();
//speak();
//greet();
//speak();

//function expression with template to pass in name paramater
const speakWithName =  function(name){
    console.log(`good day ${name}`);
}

//speakWithName('Joshua');
//speakWithName('Susan');
//speakWithName('Lucy');

//functions that return things

//regular function vs arrow function

//regular function
/*
const calcArea = function(radius){
    //for cleaner code, just return things
    return 3.14 * radius **2;
;}
*/

/*arrow function
const calcArea = (radius) =>{
    return 3.14 * radius **2;
};
*/  

/*arrow function that only has one keyword 
const calcArea = radius =>{
    return 3.14 * radius **2;
}
*/

//arrow function that only has one keyword and return
const calcArea = radius => 3.14 * radius **2;

const area = calcArea(5);
console.log(area);

//bill function converted from regular function to arrow function
/*regular function
const bill = function(products, tax){
    let total = 0;
    for (let i =0; i < products.length; i++){
        total += products[i] + products[i] * tax; 
    }
    return total;
};
*/

//arrow function 
const bill = (products, tax) =>{
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i] + products[i] * tax; 
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

