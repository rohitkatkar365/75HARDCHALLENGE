let h1 = document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{    
    setTimeout(()=>{
        let num = Math.floor(Math.random()*5)+1;
        if(num > 3)
        {
            reject("Promise Reject");
        }
        h1.style.color = color;
        console.log(`Color changed to ${color}`);
        resolve("color changed")
    },delay);
});
}
async function color(){
    try{
    await changecolor("violet",1000);
    await changecolor("lime",5000);
    await changecolor("pink",1000);
    await changecolor("grey",1000);
    await changecolor("purple",1000);
    await changecolor("orange",1000);
}   
catch(err)
{
    console.log("Error Caught");
    console.log(err);
}
    let a = 2;
    console.log(a);
}
color();                                                                                                                   