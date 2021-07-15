

const d = document
const ScrollNav = () => {
    d.addEventListener("scroll", e => {
                
        const $sectionOne = d.querySelector(".section__one"),
        sectionOne = $sectionOne.offsetTop
        const menuScroll = d.documentElement.scrollTop
        const $navTwo  = d.querySelector(".nav__secondary"),
        $principal = d.querySelector(".principal")

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

export default ScrollNav