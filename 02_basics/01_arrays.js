//arrays

const myArr = [1,2,3,"Ayush",true]
// console.log(myArr[3])

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

//array methods

//myArr.push(7)       //push is used to add an element
//myArr.pop(). //it is used to remove the last element
//myArr.unshift(9) //used to add element in the starting
//myArr.shift(). //used to remove the first element

//*******************. Remember if u ask the index value of an element not present in the array it will display -1 *///

const newArr = myArr.join()    //join() => converts array list to string type

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice, splice [important question of difference]

console.log("Akku",myArr)
const myn1 = myArr.slice(1,3) //slice print range from starting index value to last index value -1

//But it has no change on the original arrray and just prints the copy value of the index

console.log(myn1);

console.log("Ayush",myArr);
const myn2 = myArr.splice(1,3) //splice prints range from starting to ending of given index values

//But it impacts the orginal array as it cuts the orginal value from the array instead of copying it.
//Therefore the original value of the array gets affected and changed.

console.log(myn2);
console.log(myArr);






