    

let inp = document.getElementById('text-input');

  inp.oninput = function () {
  let textop = document.getElementById('texto');
  let textof= inp.value
   textop.innerText = textof;
}

window.onload = function imageOption() {

    document.getElementById("meme-image").src = "imgs/crazy.jpeg";
    
}