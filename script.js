let img = document.getElementById("meme-image");
let input = document.getElementById("meme-insert");
let text = document.getElementById("text-input");
let memetext = document.getElementById("meme-text");

input.addEventListener('change', function() {
	
    img.src =  URL.createObjectURL(input.files[0]);
    document.getElementById("meme-image-container").className = "imagevisible";
    memetext.innerText = text.value;
    
})