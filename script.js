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