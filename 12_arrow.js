const user={
    username:"satyajit",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}


// user.welcomeMessage()
// user.username="rahul"
// user.welcomeMessage()
// console.log(this)



const chai=()=>{
    let username="satya"
    console.log(this.username)    // this onlt work in object not function
}

// chai()


const add = (a,b) =>{
    return a+b

}

// 

// const addtwo= (a,b) => a+b
// const addtwo= (a,b) => (a+b)

const addtwo= (a,b) => ({username:"satya"})



console.log(addtwo(10,20))