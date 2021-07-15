
const d = document
const $subListaServicio = d.querySelectorAll(".lista_mobil")

const MenuNavegacion = (oneMenu, menuLista) => {
    d.getElementById(oneMenu).addEventListener("click", e => {
        d.querySelector(menuLista).classList.toggle("anima")
        d.querySelector(".body").classList.toggle("overflow")
        d.querySelector(".overly__opacity ").classList.toggle("overly")
        $subListaServicio.forEach(subList => {
            subList.classList.remove("anima")
        })
    }) 
}

export default MenuNavegacion