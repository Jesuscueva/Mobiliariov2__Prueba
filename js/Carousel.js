const d = document
const imgCarousel = d.querySelectorAll(".img__carousel")

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

export default Carousel