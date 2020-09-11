window.onload = function () {
    const divInputText = document.getElementsByClassName("div-insert")[0]
    function buttonTextInsert (divInputText) {
        let sendButton = document.createElement("button")
        sendButton.innerHTML = "Enviar"
        divInputText.appendChild(sendButton)
    }
    buttonTextInsert(divInputText)
}
