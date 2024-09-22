const fs = require("fs");
const https = require("https");


console.log("Hello world");

var a = 345678;
var b =345;

fs.readFileSync("./file.txt","utf8"); //100ms(what ever it time takes )  never use this it will block the main thread
console.log("This will execute only after file read!!!")

// https.get("https://dummy.json.com/products/1",(res)=>{
//     console.log("feteched data succesfully");
// });


setTimeout(()=>{
    console.log("settimeout called after 5 seconds")
},5000)





fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("file Data:",data)
})



function multiply(x,y){
    const result = a*b;
   return result
}

var c = multiply(a,b);

console.log("multiplication results is this",c);

