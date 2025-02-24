// console.log("Avani")
// // in tino se likh skte he variable ko
// let email= "avani789@gmail.com" 
// var pass= "12345"
// city = "jaipur" 
// console.table([email,pass,city])

// // data types
// "use strict";  //treat all js code as newer version
// // alert(3+3) we are using nodejs,not browser

// // number
// // bigint
// // String
// // boolean
// // null standalone value
// // undefined =value assign nhi hui he
// // non primitive
// // object

// console.log(typeof("Avani"))
// console.log(typeof undefined) //undefined
// console.log(typeof null) //object

// // let score="30a"
// // console.log(typeof score);
// // let value = Number(score)
// // console.log(typeof score);
// let score=null
// console.log(typeof score);
// let value = Number(score)
// console.log(typeof score);
// // "30"=30
// // "33abc"=NaN
// // true=1
// // ""= flase
// console.log(1+"2"+3) //123
// console.log("1"+2+3) //123
// console.log(1+2+"3") //33


// *********************************STRING************************************************
// const name = 'avani'
// const repocount = 30
// const name1=new String("avani")
// console.log("hello my name is "+ name + " and my repo count is "+repocount);
// console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// console.log(name1[0]); //print:a
// console.log(name1.__proto__); //{}
// console.log(name1.length); //5
// console.log(name1.charAt(2)); //a
// console.log(name1.toUpperCase());//AVANI but not in original variable
// console.log(name1.indexOf('a')); //0


// const newString = name.substring(0,3)
// console.log(newString) //ava
// const ab="hello my name is name and my repo count is"
// const a ="       jain    "
// console.log(a.trim())
// console.log(name.replace('a','_'))
// console.log(ab.split(' '))
// console.log(ab.includes('hello'))

//**********************************NUMBER************************************** */
// const score=400
// const balance=new Number(100)
// console.log(score)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) //decimal ke baad kitne no. chahiye
// const ab= 23.54786
// console.log(ab.toPrecision(2)) //decimal ki pehle vali digit ka dhiyan rkhna pdega agr 2digit no. he toh 2 pass krna pdega agr 3 he toh 3 and so on
// const b=1000000000
// console.log(b.toLocaleString('en-IN')) //sperated by commas like we represent the no. of rupees 
 

//*********************************MATHS***********************************************
console.log(Math)
console.log(Math.abs(-4)) //only negative to positive
console.log(Math.round(4.6)) 
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(3,6,1,9,2))
console.log(Math.max(3,6,1,9,2))
console.log(Math.random()) //random value generate between 0 to 1
console.log(Math.random()*10)

const min=10
const max =20
console.log(Math.floor(Math.random() * (max -min +1)+ min)) //IMPORTANTTTTT

//*******************************DATE AND TIME****************************** *
 let myDate = new Date()
 console.log(myDate.toISOString())
 console.log(myDate.toDateString())
 console.log(typeof myDate)


 let mycreateDate = new Date(2025,0,16) //month start from zero
 console.log(mycreateDate.toDateString())

 let mytime = Date.now()
 console.log(mytime) // iin milisecond
 console.log(Math.floor(mytime/1000))

 


 