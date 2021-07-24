


const SliderServices = () => {
    const d = document
    const $slide = d.querySelectorAll(".wrapper_slider"),
    $btnRigth = d.querySelector(".btn__rigth"),
    $btnLeft = d.querySelector(".btn__left")

let i = 0
const rigth = () => {
$slide[i].classList.remove("selec")
i = i + 1
if(i>= $slide.length ){
    i = 0
}
$slide[i].classList.add("selec")
}
const left = () => {
$slide[i].classList.remove("selec")
if(i <= 0){
    i = $slide.length
}
i = i - 1
$slide[i].classList.add("selec")
}
$btnRigth.addEventListener("click", e => {
rigth()
})
$btnLeft.addEventListener("click", e => {
left()
})

}

export default SliderServices