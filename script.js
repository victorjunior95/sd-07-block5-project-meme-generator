let elementHeader = document.createElement("header");
document.body.appendChild(elementHeader);

let elementH1 = document.createElement("h1");
elementH1.innerHTML = "MEME GENERATOR";
elementHeader.appendChild(elementH1);

let textImput = document.getElementById("text-imput");
let memeText = socument.getElementById("meme-text")

textImput.addEventListener("keyup", function () {
    memeText.innerText = textImput.value
})




