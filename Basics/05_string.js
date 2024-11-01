let name = "Ayush"
let count = 19
// console.log(name + count + "value"
console.log(`Hey my name is ${name}, I am ${count} yrs old.`);

const gameName = new String("am7_x_jod")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('a'));

const newName = gameName.substring(0,3)
console.log(newName);
const anotherName = gameName.slice(-4,1)
console.log(anotherName);

const nameString = "       RADHEY-RADHEY       "
console.log(nameString);
console.log(nameString.trim());

const url = "https://ayushworks%20fr.in"
console.log(url.replace('%20','@'));
console.log(url.includes('hello'));

console.log(gameName.split('_'));



//Remember to reivise string a bit more as it is important and know more methods of strings at MDN//
