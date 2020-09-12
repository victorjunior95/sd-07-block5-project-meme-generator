document.querySelector('#text-input').setAttribute('maxlength', 60);

let textInputBox = document.querySelector('#text-input');

textInputBox.addEventListener('keyup', function() {
    let textInput = document.querySelector('#text-input').value;
    let textMeme = document.querySelector('#meme-text');
    textMeme.innerText = textInput;
});

var LoadMemeImage = function(event) {
	var image = document.getElementById('meme-image');
	image.src = URL.createObjectURL(event.target.files[0]);
};

function frog() {
    document.getElementById("meme-image").src = "/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme1.png"
}

function lol() {
    document.getElementById("meme-image").src = "/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme2.png"
}

function homer() {
    document.getElementById("meme-image").src = "/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme3.png"
}

function omg() {
    document.getElementById("meme-image").src = "/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme4.png"
}

function fire() {
    document.getElementById("meme-image-container").style.border = "dashed 3px red";
}

function water() {
    document.getElementById("meme-image-container").style.border = "double 5px blue";
}

function earth() {
    document.getElementById("meme-image-container").style.border = "groove 6px green";
}
