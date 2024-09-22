const crypto = require("node:crypto");

console.log("Hello world!!");


var a = 3009874567;
var b = 78;

//pbkdf2 - password base key derivative function !!!
//Synchronus  function - will block the main thread - don't use it
console.log("==========");

crypto.pbkdf2Sync("password","salt",50000000,50,"sha512");
console.log("First key is Genereted");


setTimeout(()=>{
    console.log("call me right now")
  },0) //It will only be called once call stack of main thread is empty:-->


//Async function 
crypto.pbkdf2("password","salt",50000000,50,"sha512");

console.log("Second key is Genereted");



function multiply(x,y){
   const result = a*b;
   return result;
}

multiply(a,b);
