const mar_heros = ["Thanos","Thor","IronMan"]
const dc_heros = ["Batman","Superman","Flash"]

// mar_heros.push(dc_heros) //it adds the array inside the array
// console.log(mar_heros)
// console.log(mar_heros[3][1])

// const all_heros = mar_heros.concat(dc_heros) //concat adds the element of one array to another
// console.log(all_heros)

const all_new_heros = [...mar_heros,...dc_heros] //best way to add one array elements into another as it allows multiple array storage
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[8,9,0,[1,2,3],10],8]
// const real_array = another_array.flat(Infinity)  //flat allows to concat all the array elements inside the array into one.
// console.log(real_array)

console.log(Array.from("AYUSHXAM7"));
console.log(Array.from({name:"AYUSHXAM7"})); //interview pov prints empty array because it can't fetch it

let jersey1 = 7
let jersey2 = 18
let jersey3 = 45

console.log(Array.of(jersey1,jersey2,jersey3));


