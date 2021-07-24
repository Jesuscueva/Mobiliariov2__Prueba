

const Instalaciones = () => {

    const contenedorInstalaciones = document.createElement("div")
    contenedorInstalaciones.innerHTML = `
    
    <div class="section__Servicios section__primary">
    <div class="wrapper_title_servicios">
        <h2 class="title_servicios">Instalación</h2>
        <div class="line"></div>
    </div>

    <div class="wrapper__img_descrip">
        <div class="slider__img">
            <div class="wrapper_slider selec">
                    <img src="./assets/descarga.jpg" alt="">
            </div>
            <div class="wrapper_slider">
                <img src="./assets/equipo.jpg" alt="">
            </div>
            <div class="wrapper_slider">
                <img src="./assets/mision.png" alt="">
            </div>
            <div class="wrapper_btns">
                
                <div class="btn__left">
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div class="btn__rigth">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
        <div class="wrapper__descrip">
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
            </p>
            <ul>
                <li class="lista_services"> <strong>-</strong> Lorem ipsum dolor sit xerci tatio</li>
                <li class="lista_services"> <strong>-</strong> Lorem ipsum dolor sit xerci tatio</li>
                <li class="lista_services"> <strong>-</strong> Lorem ipsum dolor sit xerci tatio</li>
                <li class="lista_services"> <strong>-</strong> Lorem ipsum dolor sit xerci tatio</li>
                <li class="lista_services"> <strong>-</strong> Lorem ipsum dolor sit xerci tatio</li>

            </ul>
        </div>
    </div>
</div>
    
    
    `
    return contenedorInstalaciones
}
export default Instalaciones