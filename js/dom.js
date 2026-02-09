// all programs related to dom manipulation

// getelementbyid
// const box1 = document.getElementById('box-1');
// console.log(box1);

// // get element by tagname 
// const divs =document.getElementsByTagName('div');
// console.log('Prints all divs in the array form')
// console.log(divs);

// // getelement by classname
// const randomBoxes = document.getElementsByClassName('random');
// console.log('Prints all elements with class random in the array form')
// console.log(randomBoxes);

//manipulating HTML content
const box1 = document.getElementById('box-1');
box1.innerHTML = 'InnerHTML';

// manipulating styles
box1.style.backgroundColor = 'red';
box1.style.color = 'white';

