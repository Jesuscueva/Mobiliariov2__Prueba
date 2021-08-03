
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
    // d.querySelector(".lista__nav_proyectos").addEventListener("click", e => {
    //     d.querySelector(".lista__nav_proyectos").classList.toggle("anima")
    //     // d.querySelector(".link__nav_proyect").classList.toggle("selec")
    // })

    window.addEventListener("click", e => {
        // console.log(e.target)
        if(e.target.matches(".link_nav_mobil") || e.target.matches(".sub_link_nav_mobil") || e.target.matches(".btn-proyectos")){
            console.log("click link")
            d.querySelector(".wrapper__navbar_second").classList.remove("anima")
            d.querySelector(".nav__secondary").classList.remove("anima")
            d.querySelector(".body").classList.remove("overflow")
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    })
}

export default menuNavFloat