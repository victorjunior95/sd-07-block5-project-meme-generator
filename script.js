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

function fire() {
    document.getElementById("meme-image-container").style.border = "dashed 5px red";
}

function water() {
    document.getElementById("meme-image-container").style.border = "double 5px blue";
}

function earth() {
    document.getElementById("meme-image-container").style.border = "groove 6px green";
}
