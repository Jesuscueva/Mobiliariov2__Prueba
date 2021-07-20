

const d = document,
        w = window
const ContenedorNosotros = () => {
    const $wrapperImg = d.querySelectorAll(".wrapper_img_descrip_"),
            $parrafo = d.querySelector(".descripcion_nosotros"),
            $subTitulo = d.querySelectorAll(".sub_titulo")
        

    w.addEventListener("click", e => {
        if(e.target.matches(".mision")  || e.target.matches(".mision *")){
            console.log("mision")
            $subTitulo[0].classList.add("selec")
            $subTitulo[1].classList.remove("selec")
            $subTitulo[2].classList.remove("selec")
            $wrapperImg[0].classList.add("selec")
            $wrapperImg[1].classList.remove("selec")
            $wrapperImg[2].classList.remove("selec")
        }else if(e.target.matches(".vision") || e.target.matches(".vision *")){
            console.log("vision")
            $subTitulo[1].classList.add("selec")
            $subTitulo[0].classList.remove("selec")
            $subTitulo[2].classList.remove("selec")
            $wrapperImg[0].classList.remove("selec")
            $wrapperImg[2].classList.remove("selec")
            $wrapperImg[1].classList.add("selec")
        }else if(e.target.matches(".valores") || e.target.matches(".valores *")){
            console.log("valores")
            $subTitulo[2].classList.add("selec")
            $subTitulo[0].classList.remove("selec")
            $subTitulo[1].classList.remove("selec")
            $wrapperImg[0].classList.remove("selec")
            $wrapperImg[1].classList.remove("selec")
            $wrapperImg[2].classList.add("selec")
        }
    })
}

export default ContenedorNosotros