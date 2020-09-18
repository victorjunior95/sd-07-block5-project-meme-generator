let text_input = document.getElementById('text-input');
let text = document.getElementById('meme-text');
let image = document.getElementById('meme-image');
function carregarArquivo(event)
{
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function()
    {
        URL.revokeObjectURL(output.src);
    }
}
text_input.addEventListener('keyup', carrega_texto())

function carrega_texto()
{
    let x = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = x;

}