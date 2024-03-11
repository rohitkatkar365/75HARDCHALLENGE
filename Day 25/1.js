let url = "https://dog.ceo/api/breeds/image/random Fetch!";

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let link = await axios.get();
    let sr = document.querySelector("img");
    sr.setAttribute("src",link);
})

async function get()
{
    try{
    let res = await axios.get(url);
    return res.data.message;}
    catch(e)
    {
        console.log(e);
    }
}