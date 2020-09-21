let insertImage = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
let meme1 = document.getElementById("m1");
let meme2 = document.getElementById("m2");
let meme3 = document.getElementById("m3");
let meme4 = document.getElementById("m4");

insertImage.addEventListener("change",insertImagef);

function insertImagef(event)
{
    memeImage.src = URL.createObjectURL(event.target.files[0]);
}

text_input.addEventListener('keyup', loadText())

function loadText()
{
    let x = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = x;
}

// meme1.addEventistener("click",meme1())

// function meme1()
// {
//     memeImage.src = meme1.src;
// }