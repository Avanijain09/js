// const temperature=40
// if(temperature === 40){
//     console.log("tooo high")
// }
// else{
//     console.log("not tooo high")
// }


// //if(temperature === 40)  console.log("tooo high")

// const userloggedin = true
// const debitcard = true
// if(userloggedin && debitcard && 2==3){
//     console.log("allow to buy course")
// }

// false value : false,0,-0,bigInt 0n,"",null,undefined,NaN
// true value : "0","false"," "(space),[],{},function(){}

// Nullish coalescing operator (??):null undeffined
// let val1;
// //val1 = 5 ?? 10 //5
// // val1 = null ?? 10 //10
// // val1 = undefined ?? 15 //15
// // val1= null ?? 10 ?? undefined //10
// val1 = null ?? undefined ///undefined
// console.log(val1)




// // terniary operator
//  const ice = 100
//  ice>=80 ? console.log("more than 80"): console.log("less than 80")


//************************************ITRERATION(LOOPS) ******************************************/
for(let i =0;i<=10;i++){
    console.log(i)
    console.log()
}


//High order array loop
const arr = [1,2,3,4,5]
for(const i of arr){
    console.log(i)
}

const greet = "hello world"
for(const g of greet){
    console.log(`each char is ${g}`)
}

// mapsss : unique values print krta he or order same rehta he
const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
console.log(map)

for(const [i,j] of map){
    console.log(i,':',j)
}

const myobject = {
    js:"javascript",
    cpp:'c++'
}
for(const key in myobject)
{
    console.log(key)
}
 // ARRAY MEIN OF USE KRTE HE OR OBJECT MEIN IN


const coding = ['js','c++','python','java']
coding.forEach( function (item) {
    console.log(item)
})

coding.forEach( (item) => {
    console.log(item)
})


