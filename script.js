//CÓDIGO DOS BOTÕES QUE TROCAM AS BORDAS
window.onload=function(){
    let botaoUm=document.getElementById('botao1');
    let botaoDois=document.getElementById('botao2');
    let botaoTres=document.getElementById('botao3');
    let conteinerImagem=document.getElementById('meme-image-container');
    
    botaoUm.addEventListener('click', function(){
        conteinerImagem.style.borderColor='blue';
        conteinerImagem.style.borderWidth='3px';
    })

    botaoDois.addEventListener('click', function(){
        conteinerImagem.style.borderColor='red';
        conteinerImagem.style.borderWidth='3px';
    })

    botaoTres.addEventListener('click', function(){
        conteinerImagem.style.borderColor='green';
        conteinerImagem.style.borderWidth='3px';
    })
}
