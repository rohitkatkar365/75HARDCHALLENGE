const express = require("express");
const app = express();
let port = 3000;

app.listen(port,()=>{
    console.log(`App listening on port : ${port}`);
});

app.get("/",(req,res)=>{
    res.send("You contacted with root");
})

// app.get("/:username",(req,res)=>{
//     let username = req.params;
//     console.log(username);
//     // res.send(`This account belong to @${username}`);
//     res.send(`Welcome to the page @${username}`);
// })

app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>No Result</h1>");
    }
    res.send(`${q}`);
    
})
// app.get("/apple",(req,res)=>{
//     res.send("You contacted with apples");
// })

// app.get("/amazon",(req,res)=>{
//     res.send("You contacted with amazon");
// })

// app.post("/",(req,res)=>{
//     res.send("This is root path");
// })
// app.get("*",(req,res)=>{
// res.send("this path not exist");
// })
// app.use((req,res)=>{
//     console.log("Request received");
//     res.send({
//         name:"apple",
//         color :"red"
//     });
// });