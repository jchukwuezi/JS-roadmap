//hoisting with let and var
function mainFunction(){
    var x = 10;
    {
        let x = 20;
        console.log(x);
    }
    console.log(x)
} //this will first print out 20, then 10 because of the block statement
//mainFunction();

//passing in parameters with ES6
function example(x = 20, y = 50){ //this is using default values
    console.log(x + y);
}
//example(15, 16);

//we can use default values for functions also
function anotherExample(x = 3, y = 8, z = example(x)){
    console.log(x)
}
anotherExample();