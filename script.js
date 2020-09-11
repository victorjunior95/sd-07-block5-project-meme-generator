function addImage(event) {
    let output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files);
    output.onload = function() {
        URL.revokeObjectURL(output.src)
    }
};

function addText() {
    let text = document.getElementById('text-input').value;
    document.getElementById('meme-text').innerText = text;
}

let imgInsert = document.getElementById('meme-insert');
imgInsert.addEventListener('input', addImage);
let textInsert = document.getElementById('text-input');
textInsert.addEventListener('input', addText);