// Add 2 numbes

// function sum(number1,number2) {
// console.log(number1+number2);
// }

// function sum(num1,num2,num3){
// // let result =4+5
// return num1+num2+num3
// }
//  const result = sum(4,8,89);
// console.log(result)

// LOGIN USER POPUP

// function userLoginMsg(usename="sam"){
//   if(!usename){
//     console.log("Please enter a user name")
//     return

//   }
//   else{
//     return `${usename} Just Logged in`
//   }
// }

// // console.log(userLoginMsg("vikas"))
// console.log(userLoginMsg())

// 🧠🧠🧠 CALCULATION OF THE CART PRICE '🧠🧠🧠

// ... spread operator or rest operator depends on their situation 🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀 MULTIPLE VALUE

// function calculateCartPrice(...price) {
//     return price;
//   }
// //   console.log(...calculateCartPrice(100 + 200 + 23323));
//   console.log( calculateCartPrice(100 + 200 + 23323));



// ARROW FUNCTION
// EXPLICIT RETURN ;--when we define return keyword

// const sum=(num1,num2)=>{
//   return num1+num2
// }
// console.log(sum(1,2))


// IMPLICIT RETURN  ARROW FUNCTION :---IT'S MEANS I CONSIDER IT
// WE DON'T NEED TO WRITE RETURN WHEN WE ARE DECLARING THE VALUE 

// IMPLICIT RETURN-- when we do not use return keyword 
// const a=(num1,num2)=>(num1+num2)
// console.log(a(92,3))

// DECLARING THE OBJECT IN ARROW FUNCTION 

// const a=()=>({username:'vikas'})
// console.log(a())



// ⭐⭐IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// to remove the global pollution  we used iife 

// WE JUST WRAPPED THE FUNCTION IN IIFE METHOD WITH PARANTHESES 
// WE HAVE TO DECLARE THE ; IN THE END TO THE FUNCTION TO KNOW THAT THIS IS END HERE 



// this is NAMED IIFE CUZ WE DECLARE THE FUNCTION NAME HERE 

// (function one(){
// console.log('Database connected')
// })();

// WE CAN WRITE IT IN ARROW FUNCTION ALSO 

// UN-NAMED IIFE 
// ( (name)=>{
//     console.log(`Database connected ${name}`)
//  })(`vikas`);
 ( (name)=>{
    console.log('Database connected ${name}')
 })('vikas')


