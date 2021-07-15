
const d = document

const menuNavFloat = () => {
    d.getElementById("contenedor__bars").addEventListener("click", e=>{
        d.querySelector(".wrapper__navbar_second").classList.toggle("anima")
        d.querySelector(".body").classList.toggle("overflow")
    })
    d.querySelector(".lista__nav_servicios").addEventListener("click", e => {
        d.querySelector(".lista__nav_servicios").classList.toggle("anima")
        d.querySelector(".link__nav_service").classList.toggle("selec")
    })
    d.querySelector(".lista__nav_proyectos").addEventListener("click", e => {
        d.querySelector(".lista__nav_proyectos").classList.toggle("anima")
        d.querySelector(".link__nav_proyect").classList.toggle("selec")
    })
}

export default menuNavFloat