//Dates

let myDate = new Date()
console.log(myDate.toString()); //output was: Sun Nov 03 2024 18:04:05 GMT+0000
console.log(myDate.toDateString()); //output was: Sun Nov 03 2024
// console.log(myDate.toISOString()); //output was: 2024-11-03T18:08:50:300Z
// console.log(myDate.toJSON()); //output was: 2024-11-03T18:08:50:300Z
console.log(myDate.toLocaleDateString()); //output was: 11/3/2024
console.log(myDate.toLocaleString()); //output was: 11/3/2024, 6:10:59 PM
// console.log(myDate.toLocaleTimeString()); //output was:6:10:59 PM
// console.log(myDate.toTimeString()); //output was: 18:04:05 GMT+0000
// console.log(myDate.toUTCString()); //output was: Sun, 03 Nov 2024 18:13:57 GMT

console.log(typeof myDate);  //object


let myCreatedDate = new Date(2024, 10, 3, 11, 57, 9)

//above we saw how we initialize date and time to a date type variable in js, also js uses 0 to start months i.e JAN as 0
//Also first comes the Year, Month, Date, Hour, Minutes, Seconds
//basic => .toDataString for only date and .toLocaleString for date and time.
console.log(myCreatedDate.toLocaleString());

//if u want to enter it in the format of dd-mm-y, see below
let newDate = new Date("03-01-2024") //note: here it will be enclosed in a " " and month starts from 01 only.
console.log(newDate.toLocaleString()); //if time is not intialized it will be default at 12:00:00 AM

// *********************************TIME STAMP*****************************************

let myTimeStamp = Date.now() //Date.now is a static method not a constructor(i.e an object or variable)
console.log(myTimeStamp); //it gives output in miliseconds => eg. 1730660065031
console.log(myCreatedDate.getTime()); //Remember: () is used to call methods like .getTime or Date.now

//to convert it into seconds

console.log(Math.floor(Date.now()/1000));

let anotherDate = new Date()
console.log(anotherDate.getFullYear()); //get method can be used for different type of purpose!
console.log(anotherDate.getMonth()+1);

// `${anotherDate.getMonth()+1} and the day is`

anotherDate.toLocaleString('default',{
    weekday: "long",
})
console.log(anotherDate.toLocaleString());

