window.onload = function(){
    const containerMeme = document.querySelector('#meme-image-container');
    const textInput = document.querySelector('#text-input');
    const textToPhoto = document.querySelector('#meme-text');
    const fotoInput = document.querySelector('#input-foto');
    const imgPhoto = document.querySelector('#meme-image');
    fotoInput.addEventListener('change',function(event){
        let file = event.target.files[0];
        let url = URL.createObjectURL(file);
        imgPhoto.src=url;
    });
    textInput.addEventListener('keyup',function(event){
        textToPhoto.innerHTML = textInput.value;

    });

}

    
function openText(){
    //textInput = document.getElementById(meme-text);
    const textInput = document.querySelector('#text-input');
    
}
