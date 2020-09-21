let container = document.getElementById('meme-image-container');
let insertImage = document.getElementById('meme-insert');
let memeImage = document.getElementById('meme-image');

insertImage.addEventListener('change',insertImagef);

function insertImagef(event)
{
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
        URL.revokeObjectURL(memeImage.src);
    }
}

text_input.addEventListener('keyup', loadText);

function loadText()
{
    let x = document.getElementById('text-input').value;
    document.getElementById("meme-text").innerText = x;
}

let meme1 = document.getElementById('m1');
meme1.addEventistener("click", addImage);

let meme2 = document.getElementById('m2');
meme2.addEventistener("click", addImage);

let meme3 = document.getElementById('m3');
meme3.addEventistener("click", addImage);

let meme4 = document.getElementById('m4');
meme4.addEventistener("click", addImage);

function addImage(event)
{
    memeImage.src = event.target.src;
}


let earth = document.getElementById('earth');
earth.addEventListener("click", function() {
    container.style.border = "6px groove green";
});

let water = document.getElementById('water');
water.addEventListener("click", function() {
    container.style.border = "5px double blue";
});

let fire = document.getElementById('fire');
water.addEventListener("click", function() {
    container.style.border = "3px dashed red";
});

