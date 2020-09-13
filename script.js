const inpText = document.querySelector('#text-input');
 const previewText = document.querySelector('#meme-text');
const inpFile = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const previewImage = memeContainer.querySelector('#meme-image');
const spanText = memeContainer.querySelector('.span-text');

inpFile.addEventListener('change', function () {
  if (this.files && this.files[0]) {
    spanText.style.display = 'none';
    previewImage.style.display = 'flex';
    previewImage.src = URL.createObjectURL(this.files[0]);
  } else {
    spanText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute('src', '');
  }
});

/* adiciona a imagem de forma mais complicada no me gusta
inpFile.addEventListener('change', function() {
  const file = this.files[0]
  if (file) {
    const reader = new FileReader()
    spanText.style.display = 'none'
    previewImage.style.display = 'flex'
    reader.addEventListener('load', function() {
      previewImage.setAttribute('src', this.result)
    })
    reader.readAsDataURL(file)
  } else {
    spanText.style.display = null
    previewImage.style.display = null
    previewImage.setAttribute('src', '')
  }
}) */

inpText.addEventListener('keyup', function () {
  if (inpText.value) {
    previewText.innerHTML = inpText.value;
  }
});
