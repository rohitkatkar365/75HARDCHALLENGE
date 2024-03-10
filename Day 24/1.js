// async function greet()
// {
//     // throw "Some Error Are Occured";
//     return "Hello";    
// }

// // console.log(greet());
// greet()
// .then(()=>{
//     console.log("Success");
// })
// .catch(()=>{
//     console.log("Failure");
// })

let greet = async ()=>{
    // throw "Some Error Are Occured";
    console.log("Yes");
}
greet().then(()=>{
    console.log("Success");
})
.catch(()=>{
    console.log("Failure");
})