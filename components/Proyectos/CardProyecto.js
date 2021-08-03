
const CardProyecto = () => {
    const ProyectosTotal = [
        {
            categoria : "Educativo",
            title : "Escritorio de Marmol",
            img: `<img src="./assets/escritorio.jpg">`,
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Oficina",
            title : "Mesa de Reuniones",
            img: `<img src="./assets/sillas.jpg">`,
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Oficina",
            title : "Sillas de oficina",
            img: `<img src="./assets/escritorio2.jpg">`,
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Públicos",
            title : "Sillas para Colegio",
            img: `<img src="./assets/sillas.jpg">`,
            cliente: "Empresa SAC",
            fecha: "20 de enero 2020"
        },
        {
            categoria : "Privados",
            title : "Mesa de Reuniones",
            img: `<img src="./assets/salaReunion.jpg">`,
            cliente: "Ejecuta",
            fecha: "20 de enero 2020"
        }
    ]
    const wrapperProyect = document.querySelector(".wrapper__proyectos")
                wrapperProyect.innerHTML = " "
                ProyectosTotal.forEach(el => {
                    let div = document.createElement("div")
                    wrapperProyect.appendChild(div)
                    div.innerHTML = `
                    <div class="card_proyecto">
                        <div class="card__border"></div>
                        ${el.img}
                        <div class="overflow"></div>
                        <div class="card__description">
                            <div class="card__categoria">
                                ${el.categoria}
                            </div>
                            <div class="card__title">
                                ${el.title}
                            </div>
                            <div class="card__cliente">
                                ${el.cliente}
                            </div>
                            <div class="card__fecha">
                                ${el.fecha}
                            </div>
                        </div>
                    </div>
                    `
                    
                })
    window.addEventListener("click", e => {
            if(e.target.matches(".text_filtrado")){
                wrapperProyect.innerHTML = " "
                
                if((e.target.textContent).replace(/\s+/g, '') === "Todo"){
                    ProyectosTotal.forEach(el => {
                        let div = document.createElement("div")
                        wrapperProyect.appendChild(div)
                        div.innerHTML = `
                        <div class="card_proyecto">
                            <div class="card__border"></div>
                            ${el.img}
                            <div class="overflow"></div>
                            <div class="card__description">
                                <div class="card__categoria">
                                    ${el.categoria}
                                </div>
                                <div class="card__title">
                                    ${el.title}
                                </div>
                                <div class="card__cliente">
                                    ${el.cliente}
                                </div>
                                <div class="card__fecha">
                                    ${el.fecha}
                                </div>
                            </div>
                        </div>
                        `
                        
                    })
                }else{
                    // console.log(e.target.textContent)
                e.target.className = " text_filtrado active"
                console.log(e.target.className)
                let seleccionado = e.target.textContent
                seleccionado.replace(/\s+/g, '')
                // console.log(seleccionado.replace(/\s+/g, ''))
                let filtrado = ProyectosTotal.filter(proyec => {
                    if(proyec.categoria === seleccionado){
                        console.log("hola")
                        console.log(proyec)
                        return proyec
                    }
                })
                filtrado.forEach(el => {
                    let div = document.createElement("div")
                    wrapperProyect.appendChild(div)
                    div.innerHTML = `
                    <div class="card_proyecto">
                        <div class="card__border"></div>
                        ${el.img}
                        <div class="overflow"></div>
                        <div class="card__description">
                            <div class="card__categoria">
                                ${el.categoria}
                            </div>
                            <div class="card__title">
                                ${el.title}
                            </div>
                            <div class="card__cliente">
                                ${el.cliente}
                            </div>
                            <div class="card__fecha">
                                ${el.fecha}
                            </div>
                        </div>
                    </div>
                    `
                    
                })
                }
            }else{
                return
            }
        })
        
}

export default CardProyecto