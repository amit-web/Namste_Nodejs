const fs = require("fs");

const a = 100;
setImmediate(()=>console.log("setImmidiate"));
Promise.resolve("Resolved").then((res)=>console.log(res));
fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading CB");
})
setTimeout(()=> console.log("setTimeout"),0);
process.nextTick(()=>console.log("next tick"));

function printA(){
    console.log("a=",a);
}
printA();

console.log("last line of the code");