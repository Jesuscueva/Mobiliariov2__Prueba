import Contacto from "../components/Contacto/Contacto.js"
import Home from "../components/Home/Home.js"
import Nosotros from "../components/Nosotros/Nosotros.js"
import Proyectos from "../components/Proyectos/Proyectos.js"
import Diseño from "../components/Servicios/Diseño.js"
import Fabricacion from "../components/Servicios/Fabricacion.js"
import Instalaciones from "../components/Servicios/Instalacione.js"
import Carousel from "../js/Carousel.js"
import ContenedorNosotros from "../js/ContenedorNsotros.js"
import Formulario from "../js/Formulario.js"
import scrollEfecHome from "../js/ScrollEfecHome.js"
import SliderServices from "../js/SliderServicios.js"

const d = document

const root = d.getElementById("root")


const Route = () => {
    let hash = window.location.hash
    root.innerHTML = " "
    if( hash === "#/home"){
        console.log("Home")
        d.title = "Mobiliario Perú "
        root.scrollTo({
            top: 0,
            behavior: "smooth"
        })

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
        root.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        root.appendChild(Contacto())
        Formulario()
    }else if( hash === "#/servicio/instalacion"){
        root.appendChild(Instalaciones())
        d.title = "Instalaciones | Mobiliario - Perú"
        SliderServices()
    }else if( hash === "#/servicio/diseno"){
        
        d.title = "Diseños | Mobiliario - Perú"
        root.appendChild(Diseño())
        SliderServices()

    }else if( hash === "#/servicio/fabricacion"){
        d.title = "Fabricación | Mobiliario - Perú"
        root.appendChild(Fabricacion())
        SliderServices()

    }else if( hash === "#/proyectos"){
        d.title = "Proyectos Privados | Mobiliario - Perú"
        root.appendChild(Proyectos())
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