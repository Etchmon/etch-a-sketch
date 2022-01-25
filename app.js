let element = document.getElementsByClassName('panel');

for (i = 0; i < 16; i++) {
    let div = document.createElement("div");

    div.className = "panel";
    div.id = 'panel';
    div.addEventListener('mouseover', changeColor)
    document.getElementById('container').appendChild(div);
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

