//CÓDIGO DOS BOTÕES QUE TROCAM AS BORDAS
window.onload=function(){
    let botaoUm=document.getElementById('water');
    let botaoDois=document.getElementById('fire');
    let botaoTres=document.getElementById('earth');
    let conteinerImagem=document.getElementById('meme-image-container');
    let espacoMeme=document.getElementById('meme-image');
    let memeUm=document.getElementById('meme-1');
    let memeDois=document.getElementById('meme-2');
    let memeTres=document.getElementById('meme-3');
    let memequatro=document.getElementById('meme-4');
    let caixaTexto=document.getElementById('text-input')
    let textoMeme=document.getElementById('meme-text');
            
    botaoUm.addEventListener('click', function(){
        conteinerImagem.style.borderColor='blue';
        conteinerImagem.style.borderWidth='5px';
        conteinerImagem.style.borderStyle='double';
    })

    botaoDois.addEventListener('click', function(){
        conteinerImagem.style.borderColor='red';
        conteinerImagem.style.borderWidth='3px';
        conteinerImagem.style.borderStyle='dashed';
    })

    botaoTres.addEventListener('click', function(){
        conteinerImagem.style.borderColor='green';
        conteinerImagem.style.borderWidth='6px';
        conteinerImagem.style.borderStyle='groove';
    })

    memeUm.addEventListener('click',function(){
        espacoMeme.src='./images/meme-cachorro.jpg';        
    })

    memeDois.addEventListener('click',function(){
        espacoMeme.src='./images/meme-carro.jpg';        
    })

    memeTres.addEventListener('click',function(){
        espacoMeme.src='./images/meme-crianca.jpg';        
    })

    memequatro.addEventListener('click',function(){
        espacoMeme.src='./images/meme-gato.jpeg';
    })    

    caixaTexto.addEventListener('keyup', function(){
        textoMeme.innerText=caixaTexto.value;        
    })
}
