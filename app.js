require("./xyz.js")

//const obj = require("./sum.js")
// const {calculatSum,x} = require("./calculate/sum.js")
// const {calmultiply} = require("./calculate/multiply.js")

const {calmultiply,calculatSum}  = require("./calculate/index.js")
const data = require("./data.json");

const util = require("node:util");


console.log(data);

//import {calculatSum} from "./sum.js"
// import calculatSum from "./sum";
// var name = "Namste Node js";
// var a = 10;
// var b =20;
// console.log(name);
// console.log(a+b);

//console.log(global);
//console.log(this);// this over here is empty oject {};
//console.log(globalThis)  //equal to  global only;

//console.log(globalThis===global)// True:-->
//obj.calculatSum(2,3);

  
console.log(__dirname);
console.log(__filename);

calculatSum(2,3);
calmultiply(9,10);
//console.log(obj.x);

//console.log(x);

