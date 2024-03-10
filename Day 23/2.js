let h1  =document.querySelector("h1");

function chnagecolor(color,delay,nextcolor)
{
    setTimeout(() => {
        h1.style.color = color;
        nextcolor();    
    }, delay);
}

chnagecolor("red",2000,()=>{
    chnagecolor("orange",2000,()=>{
        chnagecolor("lime",2000,()=>{
            chnagecolor("Purple",10000)
        });
    });
});
//callback nesting nothing but callback hell

