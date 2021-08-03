"use strict"

import ContenedorNosotros from "./js/ContenedorNsotros.js"
import eventoMouseMediaQuery from "./js/EventMediaQuery.js"
import menuNavFloat from "./js/MenuNaFloat.js"
import MenuNavegacion from "./js/MenuNavegación.js"
import ScrollNav from "./js/ScrollNav.js"
import Route from "./routes/index.routes.js"

const d = document,
        w = window

d.addEventListener("DOMContentLoaded", () => {
    // w.location.hash = "#/"
    eventoMouseMediaQuery()
    ScrollNav()
    MenuNavegacion("open_menu", ".container_lista")
    menuNavFloat()
    Route()

    w.addEventListener("hashchange", e => {
        Route()
        const $principal = d.querySelector(".principal")
        $principal.style.transition = ".6s all"
        $principal.style.opacity = "1"
    })

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

    
})

