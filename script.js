window.onload = function() {
    const memeInsert = document.getElementById("meme-insert");
    const txtInput = document.getElementById("text-input");
    const memeImage = document.querySelector("#meme-image-container");
    const memeText = document.getElementById("meme-text");
    const image = document.createElement("img");
    const btFire = document.getElementById("fire");
    const btWater = document.getElementById("water");
    const btEarth = document.getElementById("earth");
    const meme1 = document.getElementById("meme-1");
    const meme2 = document.getElementById("meme-2");
    const meme3 = document.getElementById("meme-3");
    const meme4 = document.getElementById("meme-4");

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
    
  
    /*Upload de imagem*/
   /*aprendi com esse video:https://www.youtube.com/watch?v=VElnT8EoEEM*/
    memeInsert.addEventListener("change", function (){
        const file = this.files[0];
        if (file) {
           const reader = new FileReader();           
           reader.addEventListener("load", function(){            
                let urlImage = this.result;
                memeImage.style.backgroundImage='url('+urlImage+')';
                memeImage.style.backgroundSize='100% 100%';
           });
           reader.readAsDataURL(file);
          
        }
       
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

    meme1.addEventListener("click", function (){
        let patchImg = this.getAttribute('src');
        memeImage.style.backgroundImage='url('+patchImg+')';
        memeImage.style.backgroundSize='100% 100%'; 
        
    });
    meme2.addEventListener("click", function (){
        let patchImg = this.getAttribute('src');
        memeImage.style.backgroundImage='url('+patchImg+')';
        memeImage.style.backgroundSize='100% 100%'; 
    });
    meme3.addEventListener("click", function (){
        let patchImg = this.getAttribute('src');
        memeImage.style.backgroundImage='url('+patchImg+')';
        memeImage.style.backgroundSize='100% 100%'; 
    });
    meme4.addEventListener("click", function (){
        let patchImg = this.getAttribute('src');
        memeImage.style.backgroundImage='url('+patchImg+')';
        memeImage.style.backgroundSize='100% 100%'; 
    });

    

    

}




