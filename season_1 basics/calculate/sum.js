console.log("some module executed")
let x = "Namste node"
// export function calculatSum (a,b){
//     const sum =  a+b;
//     console.log(sum);
// }
function calculatSum (a,b){
    const sum =  a+b;
    console.log(sum);
}

// module.exports = calculatSum;

//for more than one you want to export(exporting multiple things);

// module.exports = {
//   x:x,
//   calculatSum:calculatSum,
// }
//console.log(module.exports) //output ==> empty object {}
module.exports = {
 x,calculatSum
}

// we can write like this also  
//module.export.x = x;
//module.export.calculatSum = calculatSum
