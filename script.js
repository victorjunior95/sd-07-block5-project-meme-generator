const memeText = document.getElementById('meme-text')
const inputText = document.getElementById('text-input')
const insertFile = document.getElementById('meme-insert')
const memeImage = document.getElementById('meme-image')
console.log(inputText.value)

inputText.addEventListener("keyup",function(){
    memeText.innerText = inputText.value
})

insertFile.addEventListener("change",function(event){
    let file = event.target.files[0];
    let url = URL.createObjectURL(file);
    memeImage.src = url;
})