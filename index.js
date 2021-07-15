
const d = document

const imgCarousel = d.querySelectorAll(".img__carousel")





const $navTwo  = d.querySelector(".nav__secondary"),
        $principal = d.querySelector(".principal")

const $sectionTwo = d.querySelector(".section__two"),
        $sectionThree = d.querySelector(".section__three"),
        $sectionFour = d.querySelector(".section__four"),
        $sectionOne = d.querySelector(".section__one")

const $efecto = d.querySelectorAll(".efecto"),
        $efectoThree = d.querySelectorAll(".efecto_three"),
        $efectoGallery = d.querySelector(".efecto_gallery"),
        $efectoFour = d.querySelectorAll(".efecto__four")


const scroll = () => {    
    d.addEventListener("scroll", e => {
        const menuScroll = d.documentElement.scrollTop
        // console.log(menuScroll)
        const sectionTwo = $sectionTwo.offsetTop,
                sectionThree = $sectionThree.offsetTop,
                sectionFour = $sectionFour.offsetTop,
                sectionOne = $sectionOne.offsetTop
        // console.log(sectionOne - 100)

        if(sectionTwo - 180  < menuScroll){
            // console.log("llegue")
            $efecto.forEach(efec => {
                efec.classList.add("anima")
            })
        }
        if(sectionThree - 300 < menuScroll){
            $efectoGallery.classList.add("anima")
            $efectoThree.forEach(efect => {
                efect.style.transition = "2s all"
                efect.style.transform = "scale(1)"
            })
        }
        if(sectionFour - 300 < menuScroll){
            $efectoFour.forEach(four => {
                four.style.transition = "2s all"
                four.style.transform = "scale(1)"
            })
        }
        if(sectionOne < menuScroll){
            // console.log("llegue")
            $navTwo.classList.add("anima")
            $principal.style.opacity = "0"
        }else{
            $navTwo.classList.remove("anima")
            setTimeout(e => {
                $principal.style.transition = ".6s all"
                $principal.style.opacity = "1"
            }, 300)
        }
    })
}

scroll()


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

menuNavFloat()
MenuNavegacion("open_menu", ".container_lista")


const Carousel = (img) => {
    const $btnLeft    = d.getElementById("btn_left"),
            $btnRigth = d.getElementById("btn_rigth")
    const $slider     = d.querySelectorAll(".slider"),
            $slideSection = d.querySelector(".slide_section")
            
    let i = 0
    const rigth = e => {
        $slider[i].classList.remove("opacity")
        i += 1
        if( i >= $slider.length){
            i = 0
        }
        $slider[i].classList.add("opacity")
        if(i === 0){
            setTimeout(() => {
                img.forEach( j => {
                    j.classList.add("active")
                })
            },300)
        }
        if(i != 0){
            img.forEach(j => {
                j.classList.remove("active")
            })
        }
    }

    const left = () => {
        $slider[i].classList.remove("opacity")
        i -= 1 
        if(i < 0){
            i = $slider.length - 1
        }
        $slider[i].classList.add("opacity")
        if(i === 0){
            setTimeout(() => {
                img.forEach( j => {
                    j.classList.add("active")
                })
            },2000)
        }
        if(i != 0){
            img.forEach(j => {
                j.classList.remove("active")
            })
        }
    }

    $btnLeft.addEventListener("click", e => {
        left()
        clearInterval(interval)
    })
    $btnRigth.addEventListener("click", e => {
        rigth()
        clearInterval(interval)
    })

    const interval = setInterval(rigth, 4000)
    
}

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
            $listaSubThree.classList.remove("hover")
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
            $listaSubThree.classList.add("hover")
        }
    }
    minAncho.addEventListener("change", responsive)
    responsive(minAncho)
}


d.addEventListener("DOMContentLoaded", e => {
    const inicio = e => {
        imgCarousel.forEach( img => {
            // console.log(img)
            img.classList.add("active")
        })
    }
    inicio()
    Carousel(imgCarousel)
    eventoMouseMediaQuery()
})
