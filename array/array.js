// ARRAY 

// const myArr= [1,2,3,4,5,6,7,8]
// console.log(myArr[4]);

// ARRAY METHODS 

// const names=['ram','shyam','bharat','shatrugan']

// PUSH()
// names.push('hari')

// POP()
// names.pop()

// UNSHIFT PUT THE VALUE IN THE BEGINNING 
// names.unshift('hari')

// SHIFT():--- It will remove the value from beginning 
// names.shift()


// INCLUDES () It will show the value is including or not 
// console.log(names.includes('ram'));



// THE MAJOR DIFFERENCE BETWEEN SLICE AND SPLICE THAT THEY CHNAGE THE ORIGINAL ARRAY VALUE


// SLICE :- in this method we can not get the last index and it is measure in the index number
//  suppose you want to access the name of ram so you have to give the slice valu(0,1) only if it is  in the 0 index

// const names = ['ram', 'shyam', 'bharat', 'shatrugan']
// const newName = names.slice(0, 1)
// console.log("B", names)
// console.log(newName);

// SPLICE :- it will remove that element from that index and also further of it  and manipulate them and give us a new aray 
const names = ['ram', 'shyam', 'bharat', 'shatrugan']
const newName = names.splice(2, 2)
console.log("c", names)
console.log(newName)


//⭐⭐ DELTE A ELEMENT FROM ARRAY 
// const numbers=[10,20,30]
// delete numbers[1]

// console.log(numbers)