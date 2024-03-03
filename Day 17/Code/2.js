const max = prompt("Enter A Max Number: ");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess The Number");

while (true) {
    if(guess == "quit")
    {
        console.log("User Quit Form Game!!!");
        break;
    }
    
    if(guess == random)
    {
        console.log("Conrates!You Are Right");
        break;
    }
    else if(guess < random)
    {
        guess = prompt("Hint:You Try To Enter Small Number: ");
    }
    else{
        guess = prompt("Hint:You Try To Enter Larger Number: ");

    }
}