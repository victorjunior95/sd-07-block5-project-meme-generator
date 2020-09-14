let uploadButton = document.getElementById("meme-insert");
let imageContainer = document.getElementById("meme-image");
let textInput = document.getElementById("text-input")
let textmeme = document.getElementById("meme-text")
uploadButton.addEventListener("change", function(){
    imageContainer.src = URL.createObjectURL(uploadButton.files[0]);
    console.log("amendoin");
});
textInput.addEventListener("change", function(){
    if (textInput.value.length <= 60)
    textmeme.innerText = textInput.value;
    else {
        alert("sua frase passa o limite de 60 caracteres");
        textmeme.innerText = "Meme text";
        textInput.value = "";
    }
})
alert("amém");