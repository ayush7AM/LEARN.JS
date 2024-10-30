// console.log(2<1)
// console.log(2<=1)
// console.log(2>1)
// console.log(2>=1)

// remember try to compare same data type only!(must)

console.log(null==0); //result:false
console.log(null>=0); //result:true (reason below)
console.log(null>0); //result:false
console.log(null<0); //result:false

//Reason for >= as "true" because the equality checker == and comparisons >=,>,<=,< works differently.
// Comparisons convert null = 0 as a number. Thats why (3) null>=0 is true and (1) null>0 is false.

console.log("2"===2); // === : checks both equality and data type