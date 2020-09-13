let text = document.querySelector('#text-input')
let textM = document.querySelector('#meme-text')

let inpFile = document.querySelector('#meme-insert')
let memeContainer = document.querySelector('#meme-image-container')
let previewImage = memeContainer.querySelector('#meme-image')
let spanText = memeContainer.querySelector('#span-text')

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
})
