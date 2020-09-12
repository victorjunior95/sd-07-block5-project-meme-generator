window.onload = function() {
    const memeInsert = document.getElementById("meme-insert");
    const txtInput = document.getElementById("text-input");
    const memeImage = document.querySelector("#meme-image");
    let memeText = document.getElementById("meme-text");
    const image = document.createElement("img");
    // configurações de estilos
    memeImage.style.backgroundColor='white';
    memeImage.style.width='400px';
    memeImage.style.height='350px';
    memeImage.style.border='solid 1px black';

    // configurações de estilos
    memeText.style.textShadow ='#000 5px 5px 5px';
    memeText.style.fontSize='30px';
    memeText.style.color='white';
    memeText.style.textTransform='uppercase';
    
  

   
    memeInsert.addEventListener("change", function (){
        let patchImg = memeInsert.value;    
        let onlyImg = patchImg.slice(12)

        image.setAttribute("src",onlyImg);
        memeImage.appendChild(image);
        console.log(memeImage);
    });

    txtInput.addEventListener("keyup", function (){
        let txt = this.value;
        txt.upperCase;        
        memeText.innerText=txt;        
    });
}




