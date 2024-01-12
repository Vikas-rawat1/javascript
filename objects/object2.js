//SINGLETON OBJECTS 
// const tinderUser = new Object()
//console.log(tinderUser)

// NON SINGLETON OBJECT
// const tinderUser ={}
// tinderUser.id='1',
// tinderUser.name='vikas'

// console.log(tinderUser)

// const regularUser={
// email:"xyz@gmail.com",
// fullName:{
//     username:{
//         firstname:'vikas ',
//         lastname:'vikas'
//     }
// }
// }

// console.log(regularUser.email)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1 , obj2}
const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);