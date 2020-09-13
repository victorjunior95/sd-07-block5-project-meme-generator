function inputText () {
    const memeText = document.querySelector('#meme-text');
    const textInput = document.querySelector('#text-input');
    textInput.addEventListener('change', () => {
    memeText.innerHTML =  textInput.value;
    });
}

// Cria URL única para documento local recebendo no parametro dados do evento onchange.

function loadImage(event) {
  const memeImage = document.querySelector("#meme-image");
  memeImage.src = URL.createObjectURL(event.target.files[0]);
// Assim que os dados do arquivo estiverem carregados a URL é descartada .
  memeImage.onload = () => {
    URL.revokeObjectURL(memeImage.src);
  };
}

function cathFile () {
  const imgInput = document.querySelector("#meme-insert");
  imgInput.addEventListener('change', loadImage);
}
//MDN https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications 
/*const fileSelect = document.getElementById("meme-insert"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", handleFiles, false); 

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);
      
      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = function() {
        URL.revokeObjectURL(this.src);
      }
      const memeImage = document.querySelector('#meme-image');
      memeImage.src = img.src;
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}
*/
function borderRed () {
    const buttonFire = document.querySelector('#fire')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonFire.addEventListener('click', () => {
    memeImageContainer.style.border = '3px dashed red';
    });
}

function borderWater () {
    const buttonWater = document.querySelector('#water')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonWater.addEventListener('click', () => {
    memeImageContainer.style.border = '5px double blue';
    });
}

function borderEarth () {
    const buttonEarth = document.querySelector('#earth')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonEarth.addEventListener('click', () => {
    memeImageContainer.style.border = '6px groove green';
    });
}

function Reset () {
  const buttonReset = document.querySelector('#reset')
  const memeImageContainer = document.querySelector('#meme-image-container');
  buttonReset.addEventListener('click', () => {
  memeImageContainer.style.border = '1px solid black';
  })
}

function catchImageMemes () {
  const catchMeme1 = document.querySelector('#meme-1');
  const catchMeme2 = document.querySelector('#meme-2');
  const catchMeme3 = document.querySelector('#meme-3');
  const catchMeme4 = document.querySelector('#meme-4');
  const catchImageMeme = document.querySelector('#meme-image-container');
  catchMeme1.addEventListener('click', function(){
  catchImageMeme.style.backgroundImage = "url('./imgs/meme1.png')";
  catchImageMeme.style.backgroundSize = "cover"
  });
  catchMeme2.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme2.png')";
    catchImageMeme.style.backgroundSize = "cover"
  });
  catchMeme3.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme3.png')";
    catchImageMeme.style.backgroundSize = "cover"
  });
  catchMeme4.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme4.png')";
    catchImageMeme.style.backgroundSize = "cover"
  });
}

window.onload = () => {
    inputText ()
    borderRed ()
    borderWater ()
    borderEarth ()
    Reset ()
    catchImageMemes ()
    cathFile ()
};
