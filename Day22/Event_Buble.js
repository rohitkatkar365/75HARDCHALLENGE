let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

div.addEventListener('click',function()
{
    console.log('Div clicked');
});

ul.addEventListener('click',function(event)
{
    // event.stopPropagation()
    console.log('Ul clicked');
});

for(let i=0;i<li.length;i++)
    li[i].addEventListener('click',function(event)
    {
        // event.stopPropagation();
        console.log('Li clicked');
    });