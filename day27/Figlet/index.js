const res = require("figlet");

res("RRK INDUSTRY", function(err,data){
    if(err)
    {
        console.log("Something Went Wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
}); 