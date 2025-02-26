
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
 
// // singleton or  constructor
// const obj = new Object()
// const obj1 = {}
// obj.id = "piet28"
// obj.name = "avani"
// obj.isloggedIn = false
// //console.log(obj)
// //console.log(obj1)
// const b = {
//     email:"avani@gmail.com",
//     fullname:{
//         username:{
//             firstname:"avani",
//             lastname:"jain"
//         }
//     }
// }
// console.log(b.fullname)
// console.log(b.fullname.username.firstname)
// const obj2 = {1:"a",2:"b"}
// const obj3 = {3:"c",4:"d"}
// const obj4 = {obj2,obj3}
// console.log(obj4)
// const obj5 = Object.assign({},obj2,obj3)
// console.log(obj5)
// const obj6 = {...obj2,...obj3}
// console.log(obj6)
// console.log(Object.keys(b))
// console.log(Object.values(b))
// console.log(Object.entries(b))



// console.log(b.hasOwnProperty('isLogged'))

const course = {cName:"js",price:"1000",cInstructor:"avani"}
course.cInstructor
const {cInstructor:cinst}= course //short mein krne liye taaki baar baar bda naam na likhna pde
console.log(cinst)

// {
//     //JSON ek object hota jiska koii naam nhi hota jb hum api call krte he toh json mein data milta he
//     name:"avani","price" : "1000"  
// }
// [
//     //ese array format bhi milta he json 
//     {},
//     {},
// ]
