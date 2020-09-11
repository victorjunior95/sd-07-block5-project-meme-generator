window.onload = function () {
    function buttonTextInsert () {
        let divInputText = document.getElementsByClassName('div-insert')[0]

        sendButton = document.createElement('button')
        sendButton.innerHTML = 'Enviar'
        divInputText.appendChild(sendButton)
    }
    buttonTextInsert()
}
