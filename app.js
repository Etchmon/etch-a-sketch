const defaultSize = 16;
const defaultColor = '#000';

let activeSize = defaultSize;
let color = defaultColor;

const slider = document.getElementById('grid');
const size = document.getElementById('size');
const colorPicker = document.getElementById('color');
const clearBtn = document.getElementById('clear');


let container = document.getElementById('container');

function setSize(newSize) {
    activeSize = newSize;
}

slider.onmouseover = (e) => udpdateSize(e.target.value);
slider.onchange = (e) => sizeChange(e.target.value);
colorPicker.onchange = (e) => selectColor(e.target.value);
clearBtn.onclick = (e) => reloadGrid();


function udpdateSize(value) {
    size.innerHTML = value + ' x ' + value;
}

function sizeChange(value) {
    udpdateSize(value);
    setSize(value);
    reloadGrid();
    console.log(activeSize);
}

function colorChange(e) {
    e.target.style.backgroundColor = color;
}

function selectColor(newColor) {
    color = newColor;
}

function changeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++) {
        let div = document.createElement("div");

        div.className = "panel";
        div.id = 'panel';
        div.addEventListener('mouseover', colorChange)
        document.getElementById('container').appendChild(div);
    }
}

function reloadGrid() {
    container.innerHTML = '';
    changeGrid(activeSize);
}

window.onload = () => {
    changeGrid(defaultSize)
}
