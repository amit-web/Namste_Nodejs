const fs = require("fs");

setImmediate(()=>console.log("setImmidiate"));
setTimeout(()=> console.log("setTimeout"),0);
Promise.resolve("Resolved").then((res)=>console.log(res));

fs.readFile("./file.txt","utf-8",()=>{
    setTimeout(()=> console.log(" 2nd setTimeout"),0);
    process.nextTick(()=>console.log("2nd next tick"));
    setImmediate(()=>console.log("setImmidiate"));
    console.log("File Reading CB");
})

process.nextTick(()=>console.log("next tick"));
console.log("last line of the code");