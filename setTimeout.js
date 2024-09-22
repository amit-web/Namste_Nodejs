console.log("Hello world");


var a = 345678;
var b =345;

//This callback will only be pushed to call stack in v8 once the call stack is empty!!
setTimeout(()=>{
  console.log("call me right now")
},0);    //Trust issue with setTimeout

setTimeout(()=>{
  console.log("call me after 3 now")
},3000);

function multiply(x,y){
    const result = a*b;
   return result
}

var c = multiply(a,b);

console.log("multiplication results is this",c);