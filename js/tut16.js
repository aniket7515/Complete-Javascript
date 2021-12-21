console.log('TUT 16');

let element =document.createElement('li');

// Add a Class Name to li element

element.className='childul';
element.id='createdLi';
element.setAttribute('title','mytitle');

element.innerText="Hello This is created by Aniket";

let ul= document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);


console.log(element);