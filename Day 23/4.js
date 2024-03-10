function savaedata(data){
    return new Promise((resolve,reject)=>{
        let internetspeed = Math.floor(Math.random()*10+1);
        if(internetspeed > 4)
        {
            console.log("Data Is Saved");
        }
        else{
            console.log("Data Is Not Saved");
        }
    });
}
// savaedata("Rohit");

let req = savaedata("RRK");
// req.then(()=>{
//     console.log(req); 
// })
// req.catch(()=>{
//     console.log(req);
// })
req.then(()=>{
    console.log("Data1 Is Saved");
    return savaedata("Hello World");
})
.then(()=>{
    console.log("Data2 Is Saved");
})
.catch(()=>
{
    console.log("Data IS Not Saved");
})