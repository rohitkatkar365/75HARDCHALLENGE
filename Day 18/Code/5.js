let a = 2;  //Global Scope

function sum(a,b){
    let sum1 = a+b;  //sum scope function scope/block scope
    console.log(sum);
}
// sum(1,2);
// console.log(a);
// console.log(sum1); error 

function sum1(a,b){
    // let c = a + b;
    // console.log(c);
    function sum2(a,b,c){
        // let d = a+b+c;
        console.log(e);
        // console.log(d);
    }
    let e = 7;
    // sum2(a,b,c);
}

sum1(1,2);