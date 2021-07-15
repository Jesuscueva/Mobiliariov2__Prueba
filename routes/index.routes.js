import Home from "../components/Home/Home.js"
import Carousel from "../js/Carousel.js"
import scrollEfecHome from "../js/ScrollEfecHome.js"

const d = document

const root = d.getElementById("root")


const Route = () => {
    let hash = window.location.hash
    root.innerHTML = " "
    if( hash === "#/home"){
        console.log("Home")

        root.appendChild(Home())
        const imgCarousel = d.querySelectorAll(".img__carousel")
        Carousel(imgCarousel)
        scrollEfecHome()
    }else{
        root.innerHTML = "NO HAY NADA"
    }
}
export default Route