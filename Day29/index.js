const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
let port = 8080;
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
    // res.send("This is home");
    res.render("home.ejs");
});
app.get("/home", (req, res) => {
    res.send("This is home");
    // res.render("home.ejs");
});

app.get("/roll", (req, res) => {
    let dice = Math.floor(Math.random() * 6) + 1;
    res.render("roll.ejs", { dice });
});

app.get("/ig/:username", (req, res) => {
    const {username} = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    // console.log(data);
    if(data)
    {
    res.render("instagram.ejs",{data});}
    else{
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log(`Connect to Port: ${port}`);
});