
const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
textInput.addEventListener('input', function(){
memeText.innerHTML = textInput.value;
});

const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
memeInsert.addEventListener('change', function(event){
    memeImage.src = URL.createObjectURL(event.target.files[0])
    memeImage.onload = function (){
        URL.revokeObjectURL(memeImage.src)
    }
})
