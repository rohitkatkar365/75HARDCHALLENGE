function savedata(data,success,failure)
{
    let is = Math.floor(Math.random()*10+1);
    if(is > 4)
    {
        success();
    }
    else{
       failure();
    }
}

savedata("RRK INDUSTRY",
()=>{
    console.log("Data Is Saved");
    savedata("Hello",()=>{
        console.log("Success2:Data is Saved");
        savedata("Rohit",()=>{
            console.log("Success3:Data Is Saved");
        },()=>{
            console.log("Failure2:Data is not saved");
        },()=>{
            console.log("failure3:Data is notsaved");
        })
    })
},
()=>{
    console.log("Data Is Not Stored");
}
);