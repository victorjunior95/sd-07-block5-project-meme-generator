const textImage = document.getElementById('text-input');
const imageMeme = document.getElementById('meme-image');
const insertImage = document.getElementById('meme-insert')

textImage.addEventListener('keyup', function(){
    const text = textImage.value;
    document.getElementById('meme-text').innerText = text;
});


insertImage.addEventListener('change', function(){
    const image = URL.createObjectURL(insertImage.files[0]);
    imageMeme.src = image;
});

