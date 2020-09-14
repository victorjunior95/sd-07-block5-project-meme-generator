window.onload = function(){
    const containerMeme = document.querySelector('#meme-image-container');
    const textInput = document.querySelector('#text-input');
    const textToPhoto = document.querySelector('#meme-text');
    const fotoInput = document.querySelector('#input-foto');
    const imgPhoto = document.querySelector('#meme-image');
    const btFire = document.querySelector('#fire');
    const btWater = document.querySelector('#water');
    const btEarth = document.querySelector('#earth');
    const sectionButtons = document.querySelector('#buttons')
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

fire.addEventListener('click', function(){
    sectionButtons.style.border = '3px dashed red';
});
water.addEventListener('click', function(){
    sectionButtons.style.border = '3px dashed blue';
});
earth.addEventListener('click', function(){
    sectionButtons.style.border = '3px dashed brown';
});
