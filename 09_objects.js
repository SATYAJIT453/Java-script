const tinderUser=new Object()  //singletone obj create 
// const tinderUser={}            //nonsingletone obj create 


tinderUser.id="102423"
tinderUser.name="satyajit"
tinderUser.isloggedIn=false

// console.log(tinderUser)



const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"satyajit",
            lastname:"swain"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}


// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)


console.log(tinderUser)
console.log(Object.values(tinderUser))
console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isloggedIn'))  //check wheather the obj have this key or not 
console.log(tinderUser.hasOwnProperty('isloggedOut'))


const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"Satyajit"
}

// const {courseinstructor}=course
// console.log(courseinstructor);

const {courseinstructor:instructor}=course    //destructureing
console.log(instructor);
