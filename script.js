window.onload = function(){
    
    let textInput = document.getElementById('text-input')
    textInput.addEventListener('keyup',function(){
        document.getElementById('meme-text').innerText = textInput.value;
    })
    document.querySelector('#meme-insert').addEventListener('change', function (event) {
        let img = document.querySelector('#meme-image');
        img.src = URL.createObjectURL(event.target.files[0]);
      });
      //https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977

    
}