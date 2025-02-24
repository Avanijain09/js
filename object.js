
// // object literals
// const mysys = Symbol("@") 
// const jsuser ={name:"avani",age:19,[mysys]:"@"}
// console.log(jsuser.age) //or console.log(jsuser["age"])
// console.log(jsuser[mysys])
// console.log(typeof mysys)

// //Object.freeze(jsuser) // is se koii value change nhi ho skti

// jsuser.greeting = function(){
//     console.log("hello js user")
// }
// jsuser.greetingTwo = function(){
//     console.log(`hello js userl,${this.name}`)
// } 
// console.log(jsuser.greeting())
// console.log(jsuser.greetingTwo())
 
// singleton or  constructor
const a = new Object()
const a = {}