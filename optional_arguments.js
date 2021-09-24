//javascript is lenient with the amount of arguments that's needed in a function
function minus(a, b){
    if (b === undefined)
        return a;
    else
        return a-b;
}

//will just return minus a if b is undefined
console.log(minus(10));
console.log(minus(10,5));

