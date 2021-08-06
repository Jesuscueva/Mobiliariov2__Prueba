
const CardProyecto = () => {
    const ProyectosTotal = [
        {
            categoria : "Educativo",
            title : "Escritorio de Marmol",
            img: `<img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/escritorio.jpg?alt=media&token=57b520a4-9b32-4e6e-8d4d-39bb53e77fd2">`,
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Oficina",
            title : "Mesa de Reuniones",
            img: `<img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/sillas.jpg?alt=media&token=a2043e00-28a3-47c9-ac24-2577d086a9e1">`,
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Oficina",
            title : "Sillas de oficina",
            img: `<img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/escritorio2.jpg?alt=media&token=f50f17e2-5b27-4d8c-9272-7b2859cf4424">`,
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Públicos",
            title : "Sillas para Colegio",
            img: `<img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/sillas.jpg?alt=media&token=a2043e00-28a3-47c9-ac24-2577d086a9e1">`,
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Privados",
            title : "Mesa de Reuniones",
            img: `<img src="https://firebasestorage.googleapis.com/v0/b/prueba2-d2f2c.appspot.com/o/salaReunion.jpg?alt=media&token=05cfdfcd-86eb-4e93-916b-77b1e6d8969d">`,
            cliente: "Ejecuta",
            fecha: "20 de enero 2020"
        }
    ]

    const creacionCard = (e) => {
        let div = document.createElement("div")
        div.classList.add("wrapper_individual-card")
                    wrapperProyect.appendChild(div)
                    div.innerHTML = `
                    <div class="card_proyecto">
                        <div class="card__border"></div>
                        ${e.img}
                        <div class="overflow_card"></div>
                        <div class="card__description">
                            <div class="card__categoria">
                                ${e.categoria}
                            </div>
                            <div class="card__title">
                                ${e.title}
                            </div>
                            <div class="card__cliente">
                                ${e.cliente}
                            </div>
                            <div class="card__fecha">
                                ${e.fecha}
                            </div>
                        </div>
                    </div>
                    `
    }

    const wrapperProyect = document.querySelector(".wrapper__proyectos")
    const $opcion = document.querySelectorAll(".text_filtrado")
    
    
    
    wrapperProyect.innerHTML = " "
    ProyectosTotal.forEach(el => {
        creacionCard(el)
    })
    $opcion[0].className = "text_filtrado active"
    // funcionSelec()
    const $wrapperCard = document.querySelectorAll(".wrapper_individual-card")
    console.log($wrapperCard)
    $wrapperCard.forEach((cd) => {
                console.log(cd)
                setTimeout(() => {
                    cd.classList.add("active")
                }, 500)
            })

    window.addEventListener("click", e => {
            if(e.target.matches(".text_filtrado")){
                wrapperProyect.innerHTML = " "
                let contenido = e.target.textContent
                const funcionSelec = () => {
                    $opcion.forEach( (op) => {
                        if(op.textContent === contenido ){
                            op.className = "text_filtrado active"
                        }else{
                            op.className = "text_filtrado"
                        }
                    })
                    const $wrapperCard = document.querySelectorAll(".wrapper_individual-card")

                    $wrapperCard.forEach((cd) => {
                        setTimeout(() => {
                            cd.classList.add("active")
                        }, 400)
                    })
                }
                
                if(contenido.replace(/\s+/g, '') === "Todo"){
                    ProyectosTotal.forEach(el => {
                        creacionCard(el)
                    })
                    funcionSelec()
                }else{
                    // console.log(e.target.textContent)
                e.target.className = "text_filtrado active"
                console.log(e.target.className)
        
                contenido.replace(/\s+/g, '')
                // console.log(seleccionado.replace(/\s+/g, ''))
                let filtrado = ProyectosTotal.filter(proyec => {
                    if(proyec.categoria === contenido){
                        return proyec
                    }
                })
                filtrado.forEach(el => {
                    creacionCard(el)
                })
                funcionSelec()
                }
            }else{
                return
            }
        })
        
}

export default CardProyecto