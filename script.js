let elementHeader = document.createElement("header");
document.body.appendChild(elementHeader);

let elementH1 = document.createElement("h1");
elementH1.innerHTML = "MEME GENERATOR";
elementHeader.appendChild(elementH1);

let textImput = document.getElementById("text-imput");
textImput.addEventListener("keyup", function () {
    document.getElementById("meme-text").innerText = textImput.value;
})




