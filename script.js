let img = document.getElementById("meme-image");
let input = document.getElementById("meme-insert");
let text = document.getElementById("text-input");
let memetext = document.getElementById("meme-text");
let fire = document.getElementById("fire");
let water = document.getElementById("water");
let earth = document.getElementById("earth");
let container = document.getElementById("meme-image-container");

input.addEventListener('change', function() {
	
    img.src =  URL.createObjectURL(input.files[0]);
    document.getElementById("meme-image-container").className = "imagevisible";
    
    
})


text.addEventListener("keypress", function() {

    memetext.innerText = text.value;
})

fire.addEventListener("click", function() {
    container.className = "fireborder";
})

water.addEventListener("click", function() {
    container.className = "waterborder";
})

earth.addEventListener("click", function() {
    container.className = "earthborder";
})