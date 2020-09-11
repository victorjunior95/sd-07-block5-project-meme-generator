//CÓDIGO DOS BOTÕES QUE TROCAM AS BORDAS
window.onload=function(){
    let botaoUm=document.getElementById('water');
    let botaoDois=document.getElementById('fire');
    let botaoTres=document.getElementById('earth');
    let conteinerImagem=document.getElementById('meme-image-container');
    
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
}
