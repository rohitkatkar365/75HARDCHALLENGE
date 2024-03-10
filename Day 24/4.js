let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     response.json().then((data)=>{
//         console.log(data);
//     })
    
// })
// .catch((err)=>{
//     console.log(err);
// })

async function req()
{
    try{
    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    console.log(data);

    let res1 = await fetch(url);
    console.log(res1);
    let data1 = await res1.json();
    console.log(data1);}
    catch(err)
    {
        console.log(err);
    }
}
req();