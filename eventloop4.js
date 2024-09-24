const fs = require("fs");

setImmediate(()=>console.log("setImmidiate"));
setTimeout(()=> console.log("setTimeout"),0);
Promise.resolve("Resolved").then((res)=>console.log(res));


fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading CB");
})

//first it will complete the next tick execution nested also resolve first;

process.nextTick(()=>{
    process.nextTick(()=>console.log("inner next tick"));
    console.log("outer next tick");
});

console.log("last line of the code");