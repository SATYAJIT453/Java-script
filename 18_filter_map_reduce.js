// const coding=['java','python','c','c++','php']
// const value=coding.forEach(element => {
//     console.log(element)
    
// });
// console.log(value)


// const mynums=[1,2,3,4,5,6,7,8,9,10]

// const value=mynums.filter((num)=>num>4)


// const newnums=[]
// mynums.forEach(element => {
//     if (element>4) {
//         newnums.push(element)
        
//     }
    
// });
// console.log(newnums)

//******************************************MAP***********************************************************************

// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const value=mynums.map((num)=>(num+10))
// console.log(value)


// const value=mynums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>60)
// console.log(value)



//**********************************************REDUCE**************************************************


const mynums=[1,2,3,4,5,6,7,8,9,10]
const value=mynums.reduce((acc,currval)=>(acc+currval),0)
// console.log(value)



const shoppingcart=[
    {
        itemname:"js Course",
        price:2999
    },
    {
        itemname:"python",
        price:3999
    },
    {
        itemname:"java",
        price:4999
    },
    {
        itemname:"php",
        price:5999
    }
]

const val2=shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(val2)