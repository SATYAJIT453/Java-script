// Immediately Invoked Function Expressions(IIFE)


// function chai(){
//     console.log('DB CONNECTED')
// }

// chai()

//NAMED IIFE
(function chai(){
    console.log('DB CONNECTED')   //some time we face global scope polution for ignore this type problem we use iife
})();

//UNNAMED IIFE
( (name)=>{
    console.log(`DB CONNECTED ${name}`)   //some time we face global scope polution for ignore this type problem we use iife
})("satyajit");

