const score = 7
// console.log(score)

const balance = new Number (400)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 127.789
// console.log(otherNum.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//**********************  MATH ******************//

// console.log(Math);
// console.log((Math).abs(-7));
// console.log((Math).round(7.16));
// console.log((Math).ceil(7.16));
// console.log((Math).max(7,9,11,18,1));
// console.log((Math).min(7,9,11,18,1));
console.log((Math).random()*10);   //round will give u value in btw 0 and 1
console.log((Math.random()*10)+1);  //+1 is used to surely get a value above 0
console.log((Math.floor(Math.random()*10)+1));  

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min));

