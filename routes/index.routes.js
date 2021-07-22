import Contacto from "../components/Contacto/Contacto.js"
import Home from "../components/Home/Home.js"
import Nosotros from "../components/Nosotros/Nosotros.js"
import Carousel from "../js/Carousel.js"
import ContenedorNosotros from "../js/ContenedorNsotros.js"
import scrollEfecHome from "../js/ScrollEfecHome.js"

const d = document

const root = d.getElementById("root")


const Route = () => {
    let hash = window.location.hash
    root.innerHTML = " "
    if( hash === "#/home"){
        console.log("Home")
        d.title = "Mobiliario Perú "

        root.appendChild(Home())

        const imgCarousel = d.querySelectorAll(".img__carousel")
        const inicio = e => {
            imgCarousel.forEach( img => {
                console.log(img)
                img.classList.add("active")
            })
        }
        setTimeout(()=>{
            inicio()
        }, 200)

        
        Carousel(imgCarousel)
        scrollEfecHome()
    }else if( hash === "#/nosotros"){
        // root.innerHTML = "Nosotros"
        root.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        root.appendChild(Nosotros())
        d.title = "Nosotros | Mobiliario - Perú"
        ContenedorNosotros()
    }else if( hash === "#/contacto"){
        
        d.title = "Contactanos | Mobiliario - Perú"
        root.appendChild(Contacto())

    }else if( hash === "#/servicio/instalacion"){
        root.innerHTML = "servicio/instalacion"
        d.title = "Instalaciones | Mobiliario - Perú"

    }else if( hash === "#/servicio/diseno"){
        root.innerHTML = "servicio/diseño"
        d.title = "Diseños | Mobiliario - Perú"

    }else if( hash === "#/servicio/fabricacion"){
        root.innerHTML = "servicio/fabricacion"
        d.title = "Fabricación | Mobiliario - Perú"

    }else if( hash === "#/proyectos/privados"){
        root.innerHTML = "proyectos/privados"
        d.title = "Proyectos Privados | Mobiliario - Perú"

    }else if( hash === "#/proyectos/publicos"){
        root.innerHTML = "proyectos/publicos"
        d.title = "Proyectos Públicos | Mobiliario - Perú"

    }else if( hash === "#/mobiliario/educativo"){
        root.innerHTML = "mobiliario/educativo"
        d.title = "Educativo | Mobiliario - Perú"

    }else if( hash === "#/mobiliario/oficina"){
        root.innerHTML = "mobiliario/oficina"
        d.title = "Oficina | Mobiliario - Perú"

    }else{
        root.innerHTML = "NO HAY NADA"
    }
}
export default Route