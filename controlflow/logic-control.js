// CONTROL FLOW OR LOGIC STATEMENT

//IF

// == Evaluate the  value is equal to other suppose 2=="2" will be true
//=== check the value the data type and value will have to be same if not it will return false 
// THIS is also known as the STRICT EQUALL 

// ⭐⭐ CHECK THE TEMPERATURE 
// const temp=400;
// if (temp<50){
//     console.log(`Temperature is less than 50 and tempreatuer is,${temp}`)

// }
// else{
    // console.log(`The temprature is more than 50 and temprature is , ${temp}`)
//     console.log("Try to stay inside");
// }

// UNDERSTANDING OF BLOCK SCOPE 

// const score =2000;
// if(score<200){
//     const power="fly";
// }
// else{
//     console.log('ERROR!');
// }
// THIS WILL THROW ERROR BECAUSE IT IS DEFINED OUTSIDE THE SCOPE 
// console.log(`User power: ${power}`);


// IMPLICIT SCOPE :-ASSUME 

const rupee=1000 
// if(rupee>500) console.log(`Rupee ${rupee}`)

// DECLARING IMPLICIT METHOD TO MULTIPLE LINE seperated by (comma )
//THIS IS NOT GOOD FORMAT  OR IT IS NOT A GOOD APPROACH 

if(rupee>500) console.log(`Rupee ${rupee}`),
console.log(`test2 ${rupee}`)
