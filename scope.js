// // let a = 10
// // const b = 20
// // var c = 30
// // console.log(a) 
// // console.log(b) 
// // console.log(c) 

// // if(true){
// //     let a = 10
// //     const b = 20
// //     var c = 30

// // }
// // //console.log(a) give error(because beyond the scope) 
// // //console.log(b) give error(because beyond the scope)
// // console.log(c)
// // //var is not good practice

// //child access all but parent doesnot (icecream example)
// // function one(){
// //     const username = "avani"
// //     function two(){
// //         const website = "youtube"
// //         console.log(username)
// //     }
// //     //console.log(website)
// //     two()
// // }

// // one()


// if(true){
//     const username = "avani"
//     if(username==="avani"){
//         const website = " youtube"
//         console.log(username + website)


//     }
//    // console.log(website)
// }
// //console.log(username)

// console.log(addone(5))
// function addone(num){
//     return num+1
// }
// //addTwo(5) //not possible
// const addTwo = function(num){
//     return num +2
// }
// addTwo(5)




//***********************ARROW AND THIS************************* */

// const user = {
//     name : "avani",
//     price:000,

//     welcomeMessage : function(){
//         console.log(`${this.name}, wwelsome to website`)
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.name="mahi"
// user.welcomeMessage()
// console.log(this)


let  add = () => { //arrow function
    let name = "avani"
}
add()

const value = (num1) => num1 //without paraentheseis
value(5)


