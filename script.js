window.onload = function() {
    const imgInput = document.getElementById("img-input");
    const txtInput = document.getElementById("text-input");
   
    imgInput.addEventListener("change", function (){
        console.log(imgInput);
    });

    txtInput.addEventListener("keyup", function (){
        let txt = this.value;
        let memeText = document.getElementById("meme-text");
        memeText.innerText=txt;        
    });
}




