let student =
{
    rollno : 1,
    name : "Rohit",
    city : "Pune"
}
console.log(student);


let Twitter_Post =
{
    username : "rohitkatkar__96",
    content : "This Is #MyFirstPost",
    likes : 30,
    repost : 20,
    tag : ["@apna","#RRK","Badilki"]
}
console.log(Twitter_Post);
// 1 Way
console.log(Twitter_Post["username"]);
// 2 Way
console.log(Twitter_Post.username);

//Add
Twitter_Post.number_of_post = 200;
console.log(Twitter_Post.number_of_post);
console.log(Twitter_Post);

//Update
Twitter_Post.likes = 100;
console.log(Twitter_Post);

//Delete

delete Twitter_Post.tag[1];
console.log(Twitter_Post);


let rand = Math.floor(Math.random()*100) + 1;
console.log(rand);