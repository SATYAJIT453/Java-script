//singleton 
//Object.create


//object literals
const mysymb=Symbol("key1")
const JsUser={
    name:"satyajit",
    age:23,
    [mysymb]:"key1",
    location:"bangalore",
    email:"satyajitswain575@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}


console.log(JsUser["name"])
console.log(JsUser[mysymb])
console.log( typeof JsUser[mysymb])

//object value change

JsUser.name="rahul"
console.log(JsUser["name"])
 //if you want no one can not change your obj value then you can freeze it ... it means if you try to changew the obj data then that can nt affected

//  Object.freeze(JsUser)
 
JsUser.name="Roy"
console.log(JsUser["name"])



JsUser.greeting=function(){
    console.log("Hello JS User")
}
JsUser.greeting2=function(){
    console.log(`Hello JS User,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())