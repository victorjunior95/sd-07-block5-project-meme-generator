window.onload = function(){
    let textInput = document.getElementById('text-input')
    textInput.addEventListener('keyup',function(){
        document.getElementById('meme-text').innerText = textInput.value
    })
    

    
}