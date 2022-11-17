out("im in message")

const pbGetMessage = document.querySelector(".pbGetMessage")
const inpMessage = document.getElementById("inpMessage")

const header = document.querySelector(".header")

const message = document.createElement('div')
message.style.width = '50%'
message.style.backgroundColor = '#37383d'
out("color =" + message.style.color)
out("width =" + message.style.width)
out("backcolor =" + message.style.backgroundColor)
out("colo" + getComputedStyle(message).color)

function showMessage() {
    message.classList.add('cookie-message')
    let strMessage = inpMessage.value;
    strMessage += '<button class="btn btn--close-cookie">Got It!</button>';
    message.innerHTML = strMessage;
    header.append(message.cloneNode(true))
    header.prepend(message)
    const btns = document.querySelectorAll('.btn--close-cookie')
    out(btns)

    const cookClose = document.querySelector('.btn--close-cookie')
    cookClose.addEventListener('click', function () {
        message.remove()
    })

    //out(getComputedStyle(message).color)

}


pbGetMessage.addEventListener('click', showMessage)

