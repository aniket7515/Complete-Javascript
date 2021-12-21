console.log("Wel 18");

let btn=document.getElementById('btn');

btn.addEventListener('click',func1);

function func1(e){
    console.log("Thanks",e);
    e.preventDefault(); // to pass the default behaviour
}

// ther are may events like :

// dblclick
// mousedown
// mouseleave
// const test= document.getElementById('myfirst');
// test.addEventListener("mouseover", function( event ) { event.target.style.color = "red";});


// const head= document.getElementById('heading');
// test.addEventListener("mouseout", function( event ) {   
// event.target.style.color = "red";});

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})