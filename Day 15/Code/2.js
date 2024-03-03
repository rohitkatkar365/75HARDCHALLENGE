let a = "       ROHIT       ";
console.log("Before Trim(): ",a);
console.log("After Trim():",a.trim());

let str1 = "Rohit";
let str2 = "rohit";
console.log("Before ToUpperCase(): ",str1);
console.log("After ToUpperCase():",str1.toUpperCase());
console.log("Before ToLowerCase(): ",str2);
console.log("After ToLowerCase():",str2.toLowerCase());

let name = "Ram";
console.log("Index of ${R}:",name.indexOf("R"));

let str = "ILOVECODING";
console.log(str.slice(5));
console.log(str.slice(1,5));
console.log(str.slice(-1));


console.log(str.replace("I","You"));

let name1 = "Ram";
console.log(name1.repeat(3));

let stu = ["R","O","H"];
console.log(stu);
console.log(stu[0]);
console.log(stu.length);

stu[0] = "T";
console.log(stu);
stu[8] = "fd";
console.log(stu);


let sample = ["jan","july","march","aug"];
sample[0]="july";
sample[1]="june";
console.log(sample);

console.log("------------------------------------");

console.log(sample.indexOf("jan"));
console.log(sample.includes("jan"));
console.log(sample.slice(2,3));
console.log(sample.reverse());
console.log(sample.concat([1,2,3,4]));


let month = ["jan","july","march","august"];

month.splice(1,1,"june");
console.log(month);
month.splice(0,1,"july");
console.log(month);
