const fs = require("fs");

const a = 100;
setImmediate(()=>console.log("setImmidiate"));
fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading CB");
})
setTimeout(()=> console.log("setTimeout"),0);

function printA(){
    console.log("a=",a);
}
printA();

console.log("last line of the code");