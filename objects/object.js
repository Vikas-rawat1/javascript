// SINGLETON :--object.create

// OBJECT LITERALS :--

// KEY:VALUE 
// key perform as a string in a backend 
let email=Symbol("xyz")
const obj = {
    // USE OF SYMBOL 
    [email]:"@gmail.com",//symbol syntax
    name: "vikas",
    "full_name": "vikas",
    age: 20
}
console.log(obj["name"]);
// // console.log(obj.name);
// // console.log(obj['full_name']);
console.log(obj[email])
// Object.freeze(obj) :-- This will freeze the conditions or changes which we declare after the freeze keyword



// CHANGE THE VALUE OF EMAIL 
obj.age=30
console.log(obj)

let date=Date()
console.log(date)