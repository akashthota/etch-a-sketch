const grid=document.querySelector('.grid');
function Griddd(n){
    if(n>100){
        alert("Maximum grid size : 100");
        n=100;
    }
    for(let i=0;i<(n*n);i++){
            const box=document.createElement('div');
            box.style.border='1px solid honeydew';
            grid.style.gridTemplateColumns=`repeat(${n},1fr)`;
            grid.style.gridTemplateRows=`repeat(${n},1fr)`;
            grid.appendChild(box).classList.add('box');
    }
}
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
Griddd(16);

function Gray(){
    const cell=document.querySelectorAll('.box');
    const gray=document.querySelector('#gray');
    gray.addEventListener('click',function(){
        cell.forEach(box => box.addEventListener('mouseover',function(){
            box.style.backgroundColor='gray';
        }))
    });
}
Gray();

function Black(){
    const cell=document.querySelectorAll('.box');
    const black=document.querySelector('#black');
    black.addEventListener('click',function(){
        cell.forEach(box => box.addEventListener('mouseover',function(){
            box.style.backgroundColor='black';
        }))
    });
}
Black();

function Rainbow(){
    const cell=document.querySelectorAll('.box');
    const rainbow=document.querySelector('#rgb');
    rainbow.addEventListener('click',function(){
        cell.forEach(box => box.addEventListener('mouseover',function(){
            const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
            //const randomR,G,B=Math.floor(Math.random()*255);
            //box.style.backgroundColor=`rgb(R,G,B)`;
            box.style.backgroundColor= randomColor;
        }))
    });
}
Rainbow();

function Reset(){
    const cell=document.querySelectorAll('.box');
    cell.forEach(element =>{
        element.style.backgroundColor='cadetblue';
    })
}
Reset();
const reset=document.querySelector('#clear');
reset.addEventListener('click',Reset);

function Resize(){
const slid=document.querySelector('#slider');
const size=document.querySelector('.value');
slid.addEventListener('input',function(){
    let val=parseInt(document.getElementById('slider').value);
    size.textContent=val;
    Reset();
    removeAllChildNodes(grid);
    Griddd(val);
    Gray();
    Rainbow();
    Black();
});
}
Resize();