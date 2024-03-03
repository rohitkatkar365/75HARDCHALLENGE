let arr = [7,9,0,-2];
let n = 3;
arr = arr.slice(0,n);
console.log(arr);

let arr1 = [7,9,0,-2];
let n1 = 3;
arr1 = arr1.slice(-3);
console.log(arr1);


let str = "1";
if(str.length == 0){
    console.log("Empty");
}
else{
    console.log("Not Empty");
}

let sample = "rOhit";
if(sample[1] == sample[1].toLowerCase()){
    console.log("YEs");
}
else{
    console.log("NI");
}

let arr2 = [1,2,3,4];
console.log(arr2.includes(-2));