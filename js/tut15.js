console.log("welcome 15");

let cont = document.querySelector('.no')
cont =document.querySelector('.container')

let nodeName= cont.childNodes[1].nodeName;
let NodeType=cont.childNodes[0].nodeType;
console.log(NodeType);
console.log(nodeName);


// console.log(cont.childNodes);
// console.log(cont.children);


// NODE types
/* 
1. Element
2. Attribute
3. Text Node  
8. Comment  
9. document
10. docType 





*/

// let container = document.querySelector('.container');
// console.log(container.children[1].children[0].children);

// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount);

// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
