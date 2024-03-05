/*
Qs1. Square and sum the array elements using the arrow function and then find the average of the array.
*/
let square = (n)=>{
    console.log(`Square of ${n} is:`,n * n);
}
// square(5);

let arr = [1,2,3,4];
let sum = (arr)=>{
    ans = 0;
    for (let i of arr) {
        ans +=i;
    }
    console.log(`Sum is:`,ans);
    console.log(`average is:`,ans/4);
}
// sum(arr);


/*
Qs2. Create a new array using the map function whose each element is equal to the original element plus 5
*/
let newarray = arr.map((ele)=>ele+5);
console.log(newarray);