const d = document



const scrollEfecHome = () => {  
    
    const $sectionTwo = d.querySelector(".section__two"),
    $sectionThree = d.querySelector(".section__three"),
    $sectionFour = d.querySelector(".section__four"),
    $sectionOne = d.querySelector(".section__one")

    const $efecto = d.querySelectorAll(".efecto"),
    $efectoThree = d.querySelectorAll(".efecto_three"),
    $efectoGallery = d.querySelector(".efecto_gallery"),
    $efectoFour = d.querySelectorAll(".efecto__four")
    d.addEventListener("scroll", e => {
        const menuScroll = d.documentElement.scrollTop
        // console.log(menuScroll)
        const sectionTwo = $sectionTwo.offsetTop,
                sectionThree = $sectionThree.offsetTop,
                sectionFour = $sectionFour.offsetTop,
                sectionOne = $sectionOne.offsetTop
        // console.log(sectionOne - 100)

        if(sectionTwo - 450  < menuScroll){
            console.log("llegue")
            $efecto.forEach(efec => {
                efec.classList.add("anima")
            })
        }
        if(sectionThree - 450 < menuScroll){
            $efectoGallery.classList.add("anima")
            $efectoThree.forEach(efect => {
                efect.style.transition = "2s all"
                efect.style.transform = "scale(1)"
            })
        }
        if(sectionFour - 450 < menuScroll){
            $efectoFour.forEach(four => {
                four.style.transition = "2s all"
                four.style.transform = "scale(1)"
            })
        }
        
    })
}

export default scrollEfecHome