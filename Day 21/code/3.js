let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let random = getrandomcolor();
    h3.innerText = random;

    let div = document.querySelector("div");
    div.style.backgroundColor = random;
});

function getrandomcolor()
{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let color = `rgb(${r},${g},${b})`;
    return color;
}