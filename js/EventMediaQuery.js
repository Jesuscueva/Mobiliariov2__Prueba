


const d = document
const $subListaServicio = d.querySelectorAll(".lista_mobil")

const eventoMouseMediaQuery = ()=> {
    let minAncho = window.matchMedia("(max-width: 540px)")
    const $lista = d.querySelectorAll(".lista"),
            $selecHover = d.querySelectorAll(".selec_hover"),
            $linkServicios = d.querySelector(".link_servicios"),
            $linkProyectos = d.querySelector(".link__proyectos"),
            $listaSubThree = d.querySelector(".lista__sub_three")
            

    const responsive = e =>{
        if(e.matches){
            console.log("celular")
            // d.querySelector(".body").classList.remove("overflow")
            $selecHover.forEach( list => {
                list.classList.remove("hover")
            })
            // $listaSubThree.classList.remove("hover")
            $linkServicios.addEventListener("click", e => {
                console.log("click")
                console.log($subListaServicio[0])
                $subListaServicio[0].classList.toggle("anima")
                $linkServicios.classList.toggle("selec")
            })
            $linkProyectos.addEventListener("click", e => {
                $subListaServicio[1].classList.toggle("anima")
                $linkProyectos.classList.toggle("selec")
            })
        }else{
            console.log("Desktop")
            // d.querySelector(".body").classList.remove("overflow")
            $subListaServicio[0].classList.remove("anima")
            $selecHover.forEach( list => {
                list.classList.add("hover")
            })
            // $listaSubThree.classList.add("hover")
        }
    }
    minAncho.addEventListener("change", responsive)
    responsive(minAncho)
}
export default eventoMouseMediaQuery