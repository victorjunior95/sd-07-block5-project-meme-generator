let memeText = document.getElementById('meme-text')
let inputText = document.getElementById('text-input')
console.log(inputText.value)

inputText.addEventListener("keyup",function(){
    memeText.innerText = inputText.value
})