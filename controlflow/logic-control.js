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

// const rupee=1000 
// // if(rupee>500) console.log(`Rupee ${rupee}`)

// // DECLARING IMPLICIT METHOD TO MULTIPLE LINE seperated by (comma )
// //THIS IS NOT GOOD FORMAT  OR IT IS NOT A GOOD APPROACH 

// if(rupee>500) console.log(`Rupee ${rupee}`),
// console.log(`test2 ${rupee}`)


// NESTED IF ELSE 

// let price=5000;
// if(price<500){
//     console.log(`price:${price}`)
// }
// else if(price<600){
//     console.log(`price:${price}`)
// }
// else if(price<700){
//     console.log(`price:${price}`)
// }
// else{
//     console.log(`THIS IS NOT FOR SALE ,price:${price}`)
// }


// let cartPrice=4000;

// console.log(`The price including GST is, ${cartPrice+18}` )


// AND OPERATOR (&& OPERATOR ):- IF both condition is true than it will return true else it will return false 
// We can also define in multiple value 

const userloggedin=true;
const debitCard=true;

if(userloggedin && debitCard ){
    // console.log("Allow Access")
}
else{
    // console.log("Please Select Other Option")
}

// OR OPERATOR (||):-If one of the condition will be true it will return the true statement 
// One of the condition should be True and if the both condition will be false it will return the fale statement 
// We can also define in multiple value 

const loggedInGoogle =true;
const loggedInEmail = false;

if(loggedInGoogle || loggedInEmail){
    console.log("Allow Access ")
}
else{
    console.log("You are not registered")
}

// ⭐⭐NULLISH COALESCING OPERATOR (??): based on NULL ,UNDEFINED

// it will return the second value if the first value is null or undefined 
//it will get the first value which comes first 
// let val1;
// // val1=undefined??10
// // val1=null??10
// // val1=null??undefined??10
// val1=null??20??10

// console.log(val1)

// TERNIARY OPERATOR 

const ice=1009
const price=ice>100?"Do not for sale":"You can use it"

// console.log(price)
// SWITCH 

// let num=3
// switch (num) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")                   
//         break;
    
//     default:
//         console.log("Sorry")
//         break;
// }


// TRUTHY OR FALSY  VALUE 

// Empty array will return the truthy value 
// const userEmail=[]
// this empty string will return the false value 
// const userEmail=''

// if(userEmail){
//     console.log(`Got user Email ${userEmail}`)
// }
// else{
//     console.log("Don't have Acess")
// }

// FALSY VALUE 
// false,0,-0,BigInt 0n, "",null,undefined ,NaN

// TRUTHY VALUE 
// [] ,"0",'false', "",{},function (){}--empty function 

// false==0, false=='',0==''

// const emptyObj={key:8}
const emptyObj={}

// if (Object.keys(emptyObj).length) {
if (Object.keys(emptyObj)) {
    
    // console.log("Object is not  empty")
    console.log("Object is empty")
}
else{
    // console.log("Object is empty")
    console.log("Object is not empty")
}