let img = document.getElementById("meme-image");
let input = document.getElementById("meme-insert");
let text = document.getElementById("text-input");
let memetext = document.getElementById("meme-text");
let fire = document.getElementById("fire");
let water = document.getElementById("water");
let earth = document.getElementById("earth");
let container = document.getElementById("meme-image-container");
let bmeme1 = document.getElementById("meme-1");
let bmeme2 = document.getElementById("meme-2");
let bmeme3 = document.getElementById("meme-3");
let bmeme4 = document.getElementById("meme-4");

input.addEventListener('change', function() {
	
    img.src =  URL.createObjectURL(input.files[0]);
    //document.getElementById("meme-image-container").className = "imagevisible";
    
})


text.addEventListener("keypress", function() {

    memetext.innerText = text.value;
});

fire.addEventListener("click", function() {
    container.className = "fireborder";
});

water.addEventListener("click", function() {
    container.className = "waterborder";
});

earth.addEventListener("click", function() {
    container.className = "earthborder";
});

bmeme1.addEventListener("click", function() {
    img.src =  "imgs/meme1.png";
});

bmeme2.addEventListener("click", function() {
    img.src =  "imgs/meme2.png";
});

bmeme3.addEventListener("click", function() {
    img.src =  "imgs/meme3.png";
});

bmeme4.addEventListener("click", function() {
    img.src =  "imgs/meme4.png";
});
