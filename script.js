window.onload = function() {
    let inputText = document.querySelector('#text-input');
    let memeText = document.querySelector('#meme-text');
    inputText.addEventListener('keyup', function(){
        memeText.innerText = inputText.value;
    })
    
}


