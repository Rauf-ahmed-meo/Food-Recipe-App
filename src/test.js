//https://www.youtube.com/watch?v=cDCzz8vJf3Y
let arr = [{name:"ahmed"}, {name:"mana"}]
let cobj = {name:"mana"}
// // i want to return true if this cobj has equal values to any arr obj
// function isbigger(o, co){
//     for (let i = 0; i < o.length; i++) {
//         const obj = o[i];
//         if (obj.name === co.name) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isbigger(arr, cobj));

console.log(arr.some(obj=>obj.name === cobj.name));







