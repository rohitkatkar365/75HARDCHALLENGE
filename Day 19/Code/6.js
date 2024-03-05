// function sum(a,b=2)
// {
//     console.log(a+b);
// }

// sum(1);

//Spread
// let arr = [1,2,3,4,5,6,7];
// // console.log(...arr);


// let char = [..."Rohit"];
// console.log(char);

// let data ={
//     name:"Rohit",
//     city : "Pune",
// };

// let datacopy = {id:1,...data};
// console.log(datacopy);

// let res = function sum(...args)
// {
//     console.log(args);
//     return args.reduce((add,args)=>add+args);
// }
// console.log(res(1,2,3));


let name = ["Rohit","Ram","Arjun","Krishna"];
let [winner,runnerup] = name;
console.log(winner,runnerup);
