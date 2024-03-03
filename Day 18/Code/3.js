function sum(a,b){
    let c = a + b;
    console.log("Sum Is: ",c);
}

function multiplication(n){
    for(let i = 1;i<=10;i++)
    {
        console.log(`${n} * ${i} = `,n*i);
    }
}
sum(null,1);
multiplication(5);