let slider = document.getElementById('grid');
let size = document.getElementById('size');

console.log(size.innerHTML);

slider.onmouseover = (e) => udpdateSize(e.target.value);
slider.onchange = (e) => sizeChange(e.target.value);

for (i = 0; i < 16; i++) {
    let div = document.createElement("div");

    div.className = "panel";
    div.id = 'panel';
    div.addEventListener('mouseover', colorChange)
    document.getElementById('container').appendChild(div);
}

function udpdateSize(value) {
    size.innerHTML = value + ' x ' + value;
}

function sizeChange(value) {
    udpdateSize(value);
}

function colorChange(e) {
    e.target.style.backgroundColor = "black";
}

console.log(document.getElementById('grid').value)

