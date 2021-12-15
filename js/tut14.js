console.log("Welcoe to tut 14");

/*
Element Selectors :

1) Single Element Selector
2) Multi Element selector







*/

let element = document.getElementById('myfirst');
// element =element.className;
// element = element.childNodes;
// element=element.parentNode;
element.style.color='red';
element.innerText='Aniket is Hard working boy'

// console.log(element);

let sel= document.querySelector('#myfirst');
sel= document.querySelector('#myfirst');
// in query selector we can use id, class , html tags

console.log(sel);



// Multi element Selector 

let elems = document.getElementsByClassName('child');

elems=document.getElementsByTagName('div')

console.log(elems);

Array.from(elems).forEach(element =>{
    console.log(element);
    element.style.color= 'orange';
})