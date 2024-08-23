//INTERVIEW QUEASTION -:
//WE KNOW THAT PI VALUE 3.14 SO CAN I CHANGE IT LIKE 4 OR 3 IF YES THEN HOW ND IF NO THEN WHY

//ANS-: NO BECAUSE THERE IS FULLY DEIFINE THAT WRITEABLE FALSE IT MEANS WE CANT OVER RIDE IT YOU CHAKE IT BY THIS METHOD....


const val=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(val);

const val2=Object.getOwnPropertyDescriptor(Math,"E")
console.log(val2);



// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);


const chai={
    name:"ginger chai",
    price:250,
    isAvailable:true,

    chaibani:function(){
        console.log("chai nai bni");
        
    }

}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{
//     writable: false,
//     enumerable: false,
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [i,j] of Object.entries(chai)) {
    if (typeof j!== 'function') {
        console.log(i,j)
    }

    
    
}