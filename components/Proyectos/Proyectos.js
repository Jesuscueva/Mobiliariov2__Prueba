


const Proyectos = () => {
    
    const contenedorProyectos = document.createElement("div")
    contenedorProyectos.innerHTML = `
    
    <div class="bloque parallax proyectos img section__primary">
    <div class="background_transparent"></div>
    <div class="wrapper_titulo_proyect">
        <h2>NUESTROS <strong>PROYECTOS</strong></h2>
    </div>
    </div>
    <div class="wrapper__filtrado">
    <div class="container_filtro">
        <div class="text_filtrado">
            Todo
        </div>
        <div class="text_filtrado">Privados</div>
        <div class="text_filtrado">Públicos</div>
        <div class="text_filtrado">Oficina</div>
        <div class="text_filtrado">Educativo</div>
    </div>
</div>

    <section class="wrapper__proyectos ">
        
    </section>
    `
    return contenedorProyectos
    /*
        <div class="card_proyecto">
            <div class="card__border"></div>
            <img src="./assets/escritorio.jpg" alt="">
            <div class="overflow"></div>
            <div class="card__description">
                <div class="card__categoria">
                    Oficina
                </div>
                <div class="card__title">
                    Escritorio de Marmol
                </div>
                <div class="card__cliente">
                    Cliente
                </div>
                <div class="card__fecha">
                    20 de Enero 2020
                </div>
            </div>
        </div>
        <div class="card_proyecto">
            <div class="card__border"></div>
            <img src="./assets/sillas.jpg" alt="">
            <div class="overflow"></div>
            <div class="card__description">
                <div class="card__categoria">
                    Oficina
                </div>
                <div class="card__title">
                    Escritorio de Marmol
                </div>
                <div class="card__cliente">
                    Cliente
                </div>
                <div class="card__fecha">
                    20 de Enero 2020
                </div>
            </div>
        </div>
        <div class="card_proyecto">
            <div class="card__border"></div>
            <img src="./assets/escritorio2.jpg" alt="">
            <div class="overflow"></div>
            <div class="card__description">
                <div class="card__categoria">
                    Oficina
                </div>
                <div class="card__title">
                    Escritorio de Marmol
                </div>
                <div class="card__cliente">
                    Cliente
                </div>
                <div class="card__fecha">
                    20 de Enero 2020
                </div>
            </div>
        </div>
        <div class="card_proyecto">
            <div class="card__border"></div>
            <img src="./assets/salaReunion.jpg" alt="">
            <div class="overflow"></div>
            <div class="card__description">
                <div class="card__categoria">
                    Oficina
                </div>
                <div class="card__title">
                    Escritorio de Marmol
                </div>
                <div class="card__cliente">
                    Cliente
                </div>
                <div class="card__fecha">
                    20 de Enero 2020
                </div>
            </div>
        </div>
    */
}
export default Proyectos