let uploadButton = document.getElementById("meme-insert");
let imageContainer = document.getElementById("imagescript");
let textInput = document.getElementById("text-input")
let textmeme = document.getElementById("memescript")
uploadButton.addEventListener("change", function(){
    imageContainer.src = URL.createObjectURL(uploadButton.files[0]);
    console.log("amendoin");
});
textInput.addEventListener("change", function(){
    textmeme.innerText = textInput.value; 
})
alert("amém");