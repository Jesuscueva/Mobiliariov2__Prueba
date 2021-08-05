
const d =document
const FuncionEventos = () => {
    const $btnUp = d.querySelector(".noticias_arriba"),
            $btnBottom = d.querySelector(".noticias_abajo"),
            $btnStop = d.querySelector(".noticias_stop"),
            $cardsNoticias = d.querySelector(".cards_noticias"),
            $ultimaCard = d.querySelector(".ultima_card")
            let i = 0
            console.log($ultimaCard.offsetTop, $ultimaCard.offsetTop - 2950)
    $cardsNoticias.addEventListener("scroll", () => {
        // const menu = $cardsNoticias.scrollTop
        // // console.log($cardsNoticias.scrollTop)
        // console.log(menu)
        // if($ultimaCard.offsetTop - 2900 <= menu ){
        //     console.log("llegoo ctmr")
        // }

    })
    console.log(i)
    const Bottom = () => {
        i += 150
        $cardsNoticias.scrollTo({
            top: i,
            behavior: "smooth"
        })
        if($cardsNoticias.scrollTop >= 838){
            i = 0
            $cardsNoticias.scrollTo({
                left: 0,
                top: i
            })
        }
    }
    $btnBottom.addEventListener("click", Bottom )
    setInterval(Bottom, 2000);
}

export default FuncionEventos