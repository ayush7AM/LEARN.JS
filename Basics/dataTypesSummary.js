// Primitive Data Types:
// 1 - String
// 2 - Number
// 3 - Boolean
// 4 - undefined
// 5 - Symbol
// 6 - BigInt
// 7 - Null


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId)

// Reference(Non Data Types)
// Array,Object,Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj={
    name: "Ayush",
    age: 19    
}
const myFunction = function(){
    console.log("Hello Wolrd");
}

// console.log(typeof heros)

//***************************

//Stack(primitive), Heap(non-primitive)
let myname = "Ayush"
let myanothername = myname
//console.log(myanothername)
myanothername = "Utkarsh"
console.log(myname)
console.log(myanothername)


// Stack(Primitive) => gives a copy
let myuserOne = {
     email: "fightayush@gmail.com",
     upi: "8542968095@ybl"
}
let myuserTwo = myuserOne
console.log(myuserTwo)
myuserTwo.email = "ayushworksfr@gmail.com"
console.log(myuserOne.email)
console.log(myuserTwo.email)
//Heap(Non-Primitive) => gives refrence