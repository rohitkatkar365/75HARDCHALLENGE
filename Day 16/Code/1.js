for(let i = 0;i<=10;i++)
{
    console.log(i);
}

for (let index = 1; index < 15; index++) {
    if (index%2==0) {
        console.log("Even : ",index);
    } else {
        console.log("Odd : ",index);
    }
}

let fav = "Avtar";
let guess = prompt("Enter Your Favourite Movie: ");
let i = 0;
while ((fav!=guess) && (guess!="quit")) {
    let guess = prompt("Wrong Guess Please Try Again: ");
}
if(fav == guess)
{
    console.log("Correct");
}
else{
    console.log("Quit")
}