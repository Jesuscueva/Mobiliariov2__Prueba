
const Formulario = () => {
    
const form = document.getElementById("form-contacto")
const nombres = document.getElementById("nombres")
const correo = document.getElementById("correo")
const celular = document.getElementById("celular")
const empresa = document.getElementById("empresa")
const asunto = document.getElementById("asunto")
const textarea = document.getElementById("textarea")
const message = document.getElementById("wrapper__message")

form.addEventListener("submit", e => {
    let topMessage = document.documentElement.scrollTop
    e.preventDefault()
    console.log(nombres.value)
    console.log(correo.value)
    console.log(celular.value)
    console.log(empresa.value)
    console.log(asunto.value)
    console.log(textarea.value)
    console.log(message)
    message.style.display = "flex"

        console.log(topMessage)
        message.style.transform = "scale(1)"
        message.style.opacity = "1"
        message.style.top = `${topMessage}px`
        message.style.left = "0"

    const envio = () => {
        message.style.transform = "scale(0)"
        nombres.value = ""
        correo.value = ""
        celular.value = ""
        empresa.value = ""
        asunto.value = ""
        textarea.value = ""
    }
    setTimeout( envio , 3500)
})
}

export default Formulario