window.onload = function() {
    const memeInsert = document.getElementById("meme-insert");
    const txtInput = document.getElementById("text-input");
    const memeImage = document.querySelector("#meme-image-container");
    const memeText = document.getElementById("meme-text");
    const image = document.createElement("img");
    const btFire = document.getElementById("fire");
    const btWater = document.getElementById("water");
    const btEarth = document.getElementById("earth");

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
    memeText.style.maxWidth='inherit'; /*Tamanho maximo do pai*/
    
  

   
    memeInsert.addEventListener("change", function (){
        let patchImg = memeInsert.value;    
        let onlyImg = patchImg.slice(12);
        memeImage.style.backgroundImage='url('+onlyImg+')';
        memeImage.style.backgroundSize='cover'; 
        //image.setAttribute("src",onlyImg);
        //memeImage.appendChild(image);
        
    });

    txtInput.addEventListener("keyup", function (){
        let txt = this.value;
        txt.upperCase;        
        memeText.innerText=txt; 
             
    });

    btFire.addEventListener("click", function (){
        memeImage.style.border='dashed 3px red';     
    });

    btWater.addEventListener("click", function (){
        memeImage.style.border='double 5px blue';     
    });

    btEarth.addEventListener("click", function (){
        memeImage.style.border='groove 6px green';     
    });

}




