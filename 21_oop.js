const user={
    username:"satya",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("got user details from database")
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());



function User(username,age,address){
    this.username=username
    this.age=age
    this.address=address


    this.greet=function(){
        // console.log(self.username);
        
    }

    return this

}

const userOne=new User("satya",24,"bbsr")
const userTwo=new User("roy",26,"ctc")    // without new keyword it will override the value thats why we use new keyword..

// console.log(userOne);
// console.log(userTwo.constructor);









// let a=[1,2,3,4,5,6,7,8,9,10]
// const value=a.filter((num)=>num>4)
// // console.log(value);
