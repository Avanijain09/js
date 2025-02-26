//   function addTwo(num1,num2){
//     console.log(num1+num2)
//   }

//   addTwo(3,5)
//   addTwo(3,"a")
//   addTwo("b",5)
//   const result =   addTwo(3,5)
//   console.log("result:",result) //undefined

  function addTwo(num1,num2){
    let result = num1 + num2 
    return result
  }
  const result =   addTwo(3,5)
//   console.log("result:",result)


function loginusermessage(username){
    return `${username} just logged in`
}
console.log(loginusermessage()) //undefined
loginusermessage("avani") //does not return any value
console.log(loginusermessage("avani"))

function loginusermessage1(username){
    if(username===undefined){ // if(!username)
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginusermessage1())
function calculateCartPrice(...number1){ //... rest operator
  return number1
}

console.log(calculateCartPrice(200,40000,500)) //[ 200, 40000, 500 ]

const user = {
  username:"avani",
  price:100
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username}and price is ${anyobject.price}`)
}

handleObject(user)
