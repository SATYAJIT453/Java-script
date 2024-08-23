//for of 

const arr=[1,2,3,4,5]

for (const i of arr) {
    // console.log(i)

    
}


const greeting="Hello World"
for (const i of greeting) {
    // console.log(i)
    
}

//Maps
const map=new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATES OF AMERICA")
map.set("PAK","PAKISTAN")
map.set("AFG","AFGANISTAN")

// console.log(map)
for (const [i,j] of map) {
    // console.log(i,":", j)
    
}

const obj={
    game1:"NFS",
    game2:"SPIDERMAN"
}

// for (const i of obj) {
//     // console.log(i)
    
// }


const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by app"
}

for (const i in myobj) {
    // console.log(`${i} : ${myobj[i]}`)
   
}


const arr1=["a","b","c","d","e"]
for (const i in arr1) {
    // console.log(arr1[i])
}


const coding=['java','python','c','c++','php']
coding.forEach(function(val){
    // console.log(val)
})

coding.forEach(element => {
    console.log(element)
});


const op=[
    {name:"satya",age:29
    },
    {name:"rahul",age:19},
    {name:"roy",age:23}
]

op.forEach(element => {
    console.log(element.age)
});