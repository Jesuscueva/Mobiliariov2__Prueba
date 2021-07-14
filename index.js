
const d = document

const imgCarousel = d.querySelectorAll(".img__carousel")





const $navTwo  = d.querySelector(".nav__secondary"),
        $principal = d.querySelector(".principal")

const $sectionTwo = d.querySelector(".section__two"),
        $sectionThree = d.querySelector(".section__three"),
        $sectionFour = d.querySelector(".section__four"),
        $sectionOne = d.querySelector(".section__one")

const $efecto = d.querySelectorAll(".efecto"),
        $efectoThree = d.querySelectorAll(".efecto_three")


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
            $efectoThree.forEach(efect => {
                efect.classList.add("anima")
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
    }) 
}

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


d.addEventListener("DOMContentLoaded", e => {
    const inicio = e => {
        imgCarousel.forEach( img => {
            // console.log(img)
            img.classList.add("active")
        })
    }
    inicio()
    Carousel(imgCarousel)
})