// const marvel_heroes=['thor','ironman','spiderman ']
// const dc_heroes=['superman','flash','batman']

// marvel_heroes.push(dc_heroes)
// const allHeroes=marvel_heroes+ dc_heroes

// SPREAD OPERATORS 
// const allHeroes=[...marvel_heroes, ...dc_heroes]
// console.log(typeof allHeroes)

// FLAT :-depth is identify by how many array is created under the array in case here is ---2
// const arr=[1,2,3,4,5,[2,3,4,5,6,5],6,8,5,4,[4,5,6,8,4,]]
// const newarr=arr.flat(Infinity)

// console.log(typeof newarr);

// CONVERT ANY THING TO THE ARRAY 

// console.log(Array.isArray("xyz"));
// console.log(Array.from("xyz"))

// let score =[100,200,300,400]
let score1=100,score2=200
console.log( Array.of( score1,score2))