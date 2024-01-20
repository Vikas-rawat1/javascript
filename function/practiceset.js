// PRACTICE SET

// ⭐⭐ DISPLAY THE USER NAME ⭐⭐
// function user(username="UserLogin"){
//   if(!username){
//   return'Hello'
//   }
//   else{
//     return `${username} hello`
//   }
// }

// console.log(user());

//⭐⭐ CONVERT MINUTES INTO SECONDS ⭐⭐
// function convert(minutes) {
// 	return minutes*60
// }

// console.log(convert(1)+" sec")
// console.log(convert(4)+" sec")
// console.log(convert(10)+" sec")
// console.log(result + "sec")

// ⭐⭐CALCULATE THE POWER ⭐⭐
//👀👀 FORMULA===> P=V*I  where p=power , v=voltage, i=current/👀👀
// function circuitPower(voltage, current) {
// 	return voltage * current
// }
// console.log(circuitPower(230,34))

//⭐⭐ finds the maximum range of a triangle's third edge, where the side lengths are all integers.⭐⭐
// 👀👀 FORMULA===>  (side1 + side2) - 1

// function nextEdge(side1, side2) {
// 	return (side1+side2)-1
// }
// console.log(nextEdge(2,3))

// ⭐⭐Is the Number Less than or Equal to Zero?⭐⭐
// function lessThanOrEqualToZero(num) {
// 	// return num<=0?true:false
//     return num<=0
// }
// console.log(lessThanOrEqualToZero(5))
// console.log(lessThanOrEqualToZero(0))
// console.log(lessThanOrEqualToZero(-2))

// ⭐⭐Write a function that takes the base and height of a triangle and return its area.⭐⭐
// 👀👀 FORMULA===>  1/2*b*h

// function triArea(base, height) {
// 	return 1/2*base*height
// }
// console.log(triArea(2,3))

// ⭐⭐Create a function that takes the age in years and returns the age in days.⭐⭐
//  👀👀365 day * age
// function calcAge(age) {
//   return age * 365;
// }

// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));

// ⭐⭐ A student learning JavaScript was trying to make a function.
// His code should concatenate a passed string name with string "Edabit" and store it in a
// variable called result. He needs your help to fix this code. ⭐⭐

// function nameString(name){
// 	var b = "Edabit"
// 	var result = name + b
//   	return result
// }
// console.log(nameString("Mubashir"))
// console.log(nameString("Matt"))
// console.log(nameString("javaScript"))

// ⭐⭐Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// function addition(num){
//     return num+1;
// }
// console.log(addition(3))
// console.log(addition(-2))

//  ⭐⭐CThere is a single operator in JavaScript, capable of providing the remainder
// of a division operation. Two numbers are passed as parameters. The first parameter divided
//  by the second parameter will have a remainder, possibly zero.

// function remainder(x,y){
//     return x%y;
// }
// console.log(remainder(1,3))

//  ⭐⭐You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored,
// find the final points for the team and return that value.

// function points(twoPointers, threePointers) {
// 	return twoPointers*2 +threePointers*3
// }
// console.log(points(1,1))
// console.log(points(1,2))

// ⭐⭐ Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge.
// function printArray(number) {
//     var newArray = [];

//     for(var i = 1; i <= number;i++) {
//       newArray.push(i);
//     }

//     return newArray;
//   }
//   console.log(printArray(16))

// function print(num){
//     var array=[]

//     for(let i=1;i<=num;i++){
//       array.push(i)
//     }
//     return array
// }

// console.log(typeof print(10))

// ⭐⭐ Write a function that converts hours into seconds.
// function hours(convertToSec){
//     return convertToSec*3600
// }

// console.log(hours(2))
// console.log(hours(10))
// console.log(hours(24))

// ⭐⭐Create a function that returns true when num1 is equal to num2; otherwise return false.

// function compareNum(num1,num2){
//     return num1===num2?true:false
// }
// console.log(compareNum(4,8))

// ⭐⭐Create a function that takes an array containing only numbers and return the first element.

// function getArray( num){
//  if(num.length > 0){
//     return num[0]
//  }
//  else{
//     return undefined
//  }
// }
// const newArray=[3,4,5,6]
// console.log(getArray(newArray))

// function arr(num){
//    if(num.length=0){
//       return num[0]
//    }
//    else{
//       return 'undefined'
//    }
// }
// const newArray =[1,2,3,4,5,6,7,8,9]
// console.log(arr(newArray))

//⭐⭐ PERFORMING THROUGH TERNIARY OPERATOR

// function returnIndex(num){
// return num.length>0?num[0]:'sorry';
// }
// const newArray=[3,34,56,7]
// console.log(returnIndex(newArray))

//⭐⭐Create a function that takes length and width and finds the perimeter of a rectangle.

// FORMULA -- P=(L+W)2

// function parameterOfrectangle(l,w){
//   return (l+w)*2;

// }

// console.log(parameterOfrectangle(6,7))
// console.log(parameterOfrectangle(20,10))

//⭐⭐Write a function that returns the string "something" joined
//  with a space " " and the given argument a.

// function  somethingReturn(a){
//    return 'something ' + a
// }

// console.log(somethingReturn('is very Unique'))
// console.log(somethingReturn('Bob James'))
// console.log(somethingReturn('is Good'))

// IIFE
// ((name=prompt) =>{
// console.log(`Hello ${name}`)
// })(prompt("Enter your good name"));

// ((name) => {
//     console.log(`Hello ${name}`);
//   })(prompt("Enter your name"));

// SUM OF POLYGON

// function sumOfPolygon(num){
// return (num-2)*180;
// }
// console.log(sumOfPolygon(1))

// Create a function that takes an array containing only numbers and return the first element.

// function arr(num){
// if(num.length>0){
//     return num[0]
// }
// else{
//     console.log('Error')
// }
// }
// const newArray=[1,2,3,4,5,6,7,8]
// console.log(arr(newArray))

// function arr(num){
//  return num.length>0?num[0]:'error'
// }
// console.log(arr([1,2,3,4]))

//⭐⭐ Mubashir wants to swap two given numbers!

// It is not returning the right values. Can you help him fix it?

//🧠🧠 WITH 3 VARIABLE
// function swap(a,b){
//     let temp=a
//   a=b,b=temp
//     return [a,b]
//     }

//🧠🧠 WITH NO VARIABLE

// function swap(a,b){
//     return [b,a]
// }
//     console.log(swap(100,200))

//⭐⭐ DELTE A ELEMENT FROM ARRAY

// const numbers=[10,20,30]
// delete numbers[1]

// console.log(numbers)

// function square(b) {
// 	return b*b
// }
// console.log(square(9))

//⭐⭐ JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// ARROW FUNCTION 
// check=(a,b)=>a&&b;

//  function check(a,b){
//     return  a&&b;
// }

// console.log(check(true,false))
// console.log(check(true,true))
// console.log(check(false,false))
// console.log(check(false,true))

// ⭐⭐Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

// function football(wins,draws,losses){
//     return wins*3+draws*1+losses*0;
// }

// console.log(football(3,4,2))
// console.log(football(5,0,2))
// console.log(football(0,0,1))


// MAKING A NAME GIVEN BY USER 

( (name)=>{
    const askName=prompt("Enter your good name")
   console.log(`${askName}`)
})('vikas')


