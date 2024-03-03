// function res(greet,n)
// {
//     for(let i= 0;i<n;i++)
//     {
//         greet();
//     }
// }

// let greet1 = function(){
//     console.log("Hello");
// }
function operation(req)
{
    if (req=="even") {
        let even= function(n){
            console.log((n%2)==0);
        }
        return even;
    }
        else if (req=="odd") {
            let odd= function(n){
                console.log(!(n%2)==0);
            }
            return odd;
        }
 else {
    console.log("Wrong Request");        
    }
}
let req = "even";
let res = operation(req);
console.log(res(2))

// res(greet1,5);