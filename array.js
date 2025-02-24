// const myarr = [0,1,2,3,4,5,true,"hitesh"] //it is resizeable and also having different datatypes
// const a= ["avani","jain"]
// const arr = new Array(1,23,4)
 
// // array methods
// arr.push(5)
// arr.pop() //last element will be remove
// arr.unshift(9) //not much use

 
// //   includes, indexof
// const newarr = arr.join() //all the values convert into strings
// const b = arr.slice(1,3)
// // slice jo he vo particular range ko print krna he but orginal array mein changes nhi hore he 
// // or splice mein last range bhi print hoti he or yeh original aaraya mein affect krti he
 
// const name = ["avani","mahi","kanu"]
// const name2 = ["dhruv","aagam","anjali"]
// name.push(name2); //3rd index pr name2 vala array aayega puraaa
// console.log(name)
// const allname = name.concat(name2);
// console.log(allname)
// const all_new_name=[...name,...name2]
// console.log(all_new_name)
// const ar = [1,2,3,[4,5,6,7,[6,7,[4,5]]]]
// const real_ar = ar.flat(Infinity)
// console.log(real_ar);
console.log(Array.isArray("avani"))
console.log(Array.from("avani"))
console.log(Array.from({name:"avani"}))//makes array using keys or values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))