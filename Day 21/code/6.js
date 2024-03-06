let ip = document.querySelector("input")

ip.addEventListener("keydown" ,function(e)
{
    console.log(e);
    console.log(e.key);
    console.log(e.value);
});