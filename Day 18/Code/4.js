function sum(n){
    let sum = 0;
    for(let i = 0;i<n;i++)
    {
        sum = sum + i;
    }
    return sum;
}

function concat()
{
    let arr = ["Rohit","Ram"];
    let temp = "";
    for (let index = 0; index < arr.length; index++) {
        temp += arr[index];
    }
    return temp;
}
// console.log(sum(5));
console.log(concat());