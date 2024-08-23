// console.log("S")
// console.log("A")
// console.log("T")
// console.log("Y")
// console.log("A")
// console.log("J")
// console.log("I")
// console.log("T")


function sayMyName(){
console.log("S");
console.log("A");
console.log("T");
console.log("Y");
console.log("A");
console.log("J");
console.log("I");
console.log("T");
}

// sayMyName()

// function add(a,b){
//     console.log(a+b)
// }

// add(3,9)


// function add(a,b){
//     const c=a+b
//     return c
// }

// d=add(3,9)
// console.log("add is : ",d)


function add(a,b){
    return a+b
}

d=add(3,9)
// console.log("add is : ",d)



function loginUserMessage(username){
    if(username==undefined){
        console.log("Please Check the username")
        return

    }
    return `${username} just logged in `

}

// console.log(loginUserMessage("satyajit"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())



function loginUserMessage(username){
    if(!username){
        console.log("Please Check the username")
        return

    }
    return `${username} just logged in `

}

// console.log(loginUserMessage("satyajit"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())





function loginUserMessage(username="satya"){
    if(!username){
        console.log("Please Check the username")
        return

    }
    return `${username} just logged in `

}

// console.log(loginUserMessage("satyajit"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())




function calculateCartPrice(...num1){
    return num1
}


// console.log(calculateCartPrice(89,98,87,67))



function calculateCartPrice(val1,val2,...num1){
    return num1
}


// console.log(calculateCartPrice(89,98,87,67))


const user={
    username:"satyajit",
    price: 199
}

function handleObject(anyobject){
    console.log(`user name is : ${anyobject.username} and price is ${anyobject.price}`)

}

// handleObject(user)
handleObject({
    username:"satyajit",
    price: 199
})