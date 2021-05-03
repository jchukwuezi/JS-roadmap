/*
function twoFer(name){
    let name = 'you'
    console.log(`One for ${name}, one for me`)
}
*/


const twoFer = (name = 'you') => {
    console.log(`One for ${name}, one for me`);
}

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
colors = ['black', 'brown', 'red', 'orange', 'yellow', 
'green', 'blue', 'violet', 'grey', 'white']

function createResistor(colors, numbers){
    for (i = 0; i < colors.length; i++){
      result = {};
      key = colors[i]
      for (j =0; j < numbers.length; j++){
        value = numbers[j];
        result[key] = value;
        console.log(result);
      }
    }
}



createResistor(colors, numbers);


/*
console.log(twoFer());
console.log(twoFer('Joshua'));
*/
