

const d = document,
        w = window
const ContenedorNosotros = () => {
    const $img = d.querySelector(".container__img"),
            $parrafo = d.querySelector(".descripcion_nosotros")
    
    w.addEventListener("click", e => {
        if(e.target.matches(".mision")  || e.target.matches(".mision *")){
            $img.innerHTML = `<img src="../assets/mision.png" > `
            $parrafo.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumerat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto "
        }else if(e.target.matches(".vision") || e.target.matches(".vision *")){
            console.log("vision")
            $parrafo.innerHTML = "vision"
        }else if(e.target.matches(".valores") || e.target.matches(".valores *")){
            console.log("valores")
            $parrafo.innerHTML = "Valores"
        }
    })
}

export default ContenedorNosotros