const main = document.getElementById('container');
const newSize = document.querySelector('.size');
const px = document.querySelector('.numVal');
const rb = document.querySelector('.rainbow');
const black = document.querySelector('.black');
const maxWidth = parseInt(main.getAttribute('width'));

let color = 'black'
let rainbow = false;

let boxes = [];
function init(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.classList.add('grid-box');
      box.textContent = '';
      row.appendChild(box);
      boxes.push(box);
    }
    main.appendChild(row);
  }

  for (let box of boxes) {
    box.style.width = maxWidth / size + 'px';
    box.style.height = maxWidth / size + 'px';
  }

}

function draw() {
  let clear = document.querySelector('.clear');
  window.addEventListener('selectstart', (event) => event.preventDefault());
  boxes.forEach(function (box) {
    box.addEventListener('mouseover', () => {
      if(rainbow){
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        color = `rgb(${r},${g},${b})`;
      }
      box.style.backgroundColor = color;
    });
  });
  boxes.forEach(function (box) {
    box.addEventListener('touchmove', () => {
      if(rainbow){
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        color = `rgb(${r},${g},${b})`;
      }
      box.style.backgroundColor = color;
    });
  });
  clear.addEventListener('click', () => {
    boxes.forEach(function (box) {
      box.style.backgroundColor = 'white';
    });
  });
}

init(16);
draw();

newSize.addEventListener('change', (event) => {
  boxes = [];
  main.innerHTML = '';
  px.textContent = `${event.target.value}px`;
  init(event.target.value);
  draw();
});


rb.addEventListener('click', ()=>{
  rainbow = true;
})

black.addEventListener('click', ()=>{
  rainbow = false;
  color = 'black';
})