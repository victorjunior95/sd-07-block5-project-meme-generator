let uploadButton = document.getElementById("meme-insert");
let imageContainer = document.getElementById("meme-image");
let textInput = document.getElementById("text-input")
uploadButton.addEventListener("change", function(){
    imageContainer.src = URL.createObjectURL(uploadButton.files[0]);
    console.log("amendoin");
});
alert("amém");