// LOOP is aka ITERATION

// for(let i=0;i<=10;i++){
//     // console.log(i)
//     const element=i;
// if(element==5){
//     console.log("5 is best number")
// }
// console.log(element)
// }

// NESTED LOOP

// for(let i=1;i<=10;i++){
//     console.log(`TABLE OF ${i}`)
//     for (let j = 1; j <=10; j++) {
//         // console.log(`inner loop ${j}`);
//         console.log(i + '*' + j+ '=' + i*j)
//     }
// }

// ARRAY WITH LOOP
// let heroes=['superman','batman','flash']
// console.log(heroes.length)
// for(let i=0;i<heroes.length;i++){
//     const elements=heroes[i]
//     console.log(elements)
// }

//BREAK AND CONTINUE
// BREAK
// for (let index = 0;index <= 20; index++) {
//     if(index==5){
//         console.log("Detected 5")
//         break;
//     }
//   console.log(`hello ${index}`);
// }

// CONTINUE
// for (let index = 0;index <= 20; index++) {
//     if(index==5){
//         console.log("Detected 5")
//         continue;
//     }
//   console.log(`hello ${index}`);
// }

// FOR OF LOOP

// const greetings="Hello world!"
// for(const greet of greetings){
//     // console.log(greet)
//     console.log(`Each char is ${greet}`)
// }
// WTIH NUMBER
// const greetings="2"
// for(const greet of greetings){
//     // console.log(greet)
//     console.log(`Each char is ${greet}`)
// }


// MAPS🧠🧠:- use only UNIQUE VALUE and does not contain the dublicate value 

// const map=new Map()
// map.set("IN","india")
// map.set("FR","france")
// map.set("US","usa")
// map.set("US","usa")

// console.log(map)

// [key,value] for accessing the value we have to destructure the array 
// for(const [key,value] of map){
//     console.log(key,':-',value)
// }

// WITH OBJECT 
// object is not iterable with map and does not use with for in  loop 
// const myObject={
//     game1:'football',
//     game2:'volleyball'
// }

// for(const [obj,value] of myObject){
//     console.log(obj,value)
// }

// -----------------------------------------------------------------------------------------------

// OBJECT WITH FOR IN LOOP 

const myObj={
    js:'javascript',
    ds:'data structure'
}

for