let task = [];

let req = prompt("Which Task YOu Want To Try?");

while(true){
    if (req=="quit") {
        console.log("Exit");
        break;
    }
    else if(req=="list"){
        console.log("--------------------");
        for(let i = 0;i<task.length;i++)
        {
            console.log(i,task[i]);
        }
        console.log("--------------------");
    }
    else if(req == "add")
    {
        let work = prompt("Which Task YOu Want To Try?");
        task.push(work);
        console.log("Task Added");
    }
    else if(req=="delete")
    {
        let ind = prompt("Which Task Is Done!!!");
        task.splice(ind,1);
        console.log("Task Deleted");
    }
    req = prompt("Which Task YOu Want To Try?");
}