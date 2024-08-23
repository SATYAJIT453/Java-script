// const MyArr=[0,1,2,3,4,5,6,7,8,9]
// console.log(MyArr[1])



// //ARRAY METHODS  

// MyArr.push(98)   //it will add the element at the end 
// console.log(MyArr)


// MyArr.pop()  //it will remove the last element 
// console.log(MyArr)

// MyArr.unshift(88)   //it will add the element at the first
// console.log(MyArr)


// MyArr.shift()   //it will remove the first element of the array
// console.log(MyArr)


// console.log(MyArr.includes(90))

// console.log(MyArr.indexOf(90))
// console.log(MyArr.indexOf(9))



// const arr=MyArr.join()

// console.log(MyArr)
// console.log(arr)
// console.log(typeof(arr))

// console.log(typeof(MyArr))



// console.log(MyArr) 

// const myn1=MyArr.slice(1,3)  //it will show the array element from 1th index to 2nd index 3rd not included and the orgional array remain as it is 
// console.log(myn1) 

// const myn2=MyArr.splice(1,3) ////it will delete the array element from 1th index to 3nd index  and the orgional array changes
// console.log(myn2) 

// console.log(MyArr) 



//ARRAY PART--2



const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)


// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_heros2=[...marvel_heros,...dc_heros]
console.log(all_heros2);



const arr2=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const arr3=arr2.flat(Infinity)
console.log(arr3)
console.log(Array.isArray("arr2"))
console.log(Array.from("Satyajit"))

console.log(Array.from({name:"satyajit"}))   //intresting for interview



let a=100
let b=200
let c=300

console.log(Array.of(a,b,c));