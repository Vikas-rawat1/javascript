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

const greetings="Hello world!"
for(const greet of greetings){
    // console.log(greet)
    console.log(`Each char is ${greet}`)
}