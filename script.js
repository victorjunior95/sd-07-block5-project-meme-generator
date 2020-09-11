let text = document.querySelector("#text-input")

text.addEventListener("keyup" , function(){
    let textInput = document.querySelector("#text-input").value
    let memeText = document.querySelector("#meme-text")
    memeText.innerText= textInput
})