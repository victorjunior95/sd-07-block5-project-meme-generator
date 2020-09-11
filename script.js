document.getElementById('text-input').addEventListener("keyup", function(){
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
})