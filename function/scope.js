// let a=400;
// // The value of a is differ from the if  scope
// if(true){
//     let a=50;
// console.log(a)
// }
// console.log(a)

// NESTED SCOPE

// CHILDREN CAN ACCESS THEIR PARENTS VARIABLE BUT PARENTS ARE NEVER ALLOWED TO ACCESS CHILDREN VARIABLE
// let username='vikas'
// function one() {
//   let username = "vikas";

//   function two() {
//     let age = 12;
//     console.log(username);
//   }
//   two();
//   return username;
// }

// // one();
// if(username ==='vikas'){
//     console.log(one())
// }

// else{
//     console.log('Attempt to acess child variable')
// }

// HOISTING IN JAVASCRIPT
// hoisting only use in the function declaration it means you can access the value 
// of that function before it's declaration

// BUT you can not use  variable before its initialization ,
// hoisting refernce to access the variable(normal variable)

// ----This will throw error cuzz we initialized the value of a 
// console.log(a)
// let a=90;

// WE CAN DECLARE THE FUNCTION BEFORE ITS INIIALIZATION WITHOUT ANY ERROR

console.log(one(3))
function one(num){
  console.log('Hey, I m hoisting reference')
  return num*3
}
