import Home from "../components/Home/Home.js"
import Carousel from "../js/Carousel.js"
import scrollEfecHome from "../js/ScrollEfecHome.js"

const d = document

const root = d.getElementById("root")


const Route = () => {
    let hash = window.location.hash
    // root.innerHTML = " "
    if( hash === "#/home"){
        console.log("Home")

        // root.appendChild(Home())
        // const imgCarousel = d.querySelectorAll(".img__carousel")
        // Carousel(imgCarousel)
        // scrollEfecHome()
    }else if( hash === "#/nosotros"){
        // root.innerHTML = "Nosotros"

    }else if( hash === "#/contacto"){
        root.innerHTML = "contacto"

    }else if( hash === "#/servicio/instalacion"){
        root.innerHTML = "servicio/instalacion"

    }else if( hash === "#/servicio/diseno"){
        root.innerHTML = "servicio/diseño"

    }else if( hash === "#/servicio/fabricacion"){
        root.innerHTML = "servicio/fabricacion"

    }else if( hash === "#/proyectos/privados"){
        root.innerHTML = "proyectos/privados"

    }else if( hash === "#/proyectos/particulares"){
        root.innerHTML = "proyectos/particulares"

    }else if( hash === "#/mobiliario/educativo"){
        root.innerHTML = "mobiliario/educativo"

    }else if( hash === "#/mobiliario/oficina"){
        root.innerHTML = "mobiliario/oficina"

    }else{
        root.innerHTML = "NO HAY NADA"
    }
}
export default Route