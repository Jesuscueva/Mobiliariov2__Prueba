


const Nosotros = () => {

    const contenedorNosotros = document.createElement("div")
    contenedorNosotros.innerHTML = `
    <div class="bloque parallax nosotros img section__primary">
    <div class="background_transparent"></div>
    <div class="wrapper_titulo_nosotros">
        <h2>QUIENES <strong>SOMOS?</strong></h2>
    </div>
</div>

<div class="wrapper__parrafo">
    <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate.
        <br>
        <br>
        velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
    </p>
</div>

<div class="wrapper_info">

    <div class="container_nosotros_info">
        <div class="container__titulos">
            <div class="sub_titulo selec mision">
                
                    MISIÓN
                
            </div>
            <div class="border"></div>
            <div class="sub_titulo vision ">
                
                    VISIÓN
                
            </div>
            <div class="border"></div>
            <div class="sub_titulo valores">
                
                    VALORES
                
            </div>
        </div>
        <div class="container_img_descrip">
            <div class="wrapper_img_descrip_ selec">
                <div class="container__img">
                    <img src="./assets/mision2_Mesa de trabajo 1.png" alt="Misión">
                </div>
                <div class="container__descrip">
                    <p class="descripcion_nosotros ">
                        Inspirados por los avances ---, guiados por nuestros valores y con la nutrición en el centro, trabajamos conjuntamente con nuestros colaboradores para mejorar la calidad de vida y contribuir a un futuro más saludable, para personas y familias, para nuestras comunidades y para el planeta.
                    </p>
                </div>
            </div>
            <div class="wrapper_img_descrip_">
                <div class="container__img">
                    <img src="./assets/vision2-02.png" alt="Misión">
                </div>
                <div class="container__descrip">
                    <p class="descripcion_nosotros ">
                        Como empresa líder , los esfuerzos de la compañía se orientan a estar siempre a la vanguardia s.

                        A partir de esa premisa, el objetivo es cumplir con las exigencias de una sociedad que avanza hacia una vida más saludable, creando valor a largo plazo para nuestros accionistas, colaboradores, consumidores y las sociedades donde operamos.
                    </p>
                </div>
            </div>
            <div class="wrapper_img_descrip_">
                <div class="container__img">
                    <img src="./assets/valores-03.png" alt="Valores">
                </div>
                <div class="container__descrip">
                    <p class="descripcion_nosotros ">
                        Valores empresa líder , los esfuerzos de la compañía se orientan a estar siempre a la vanguardia s.

                        A partir de esa premisa, el objetivo es cumplir con las exigencias de una sociedad que avanza hacia una vida más saludable, creando valor a largo plazo para nuestros accionistas, colaboradores, consumidores y las sociedades donde operamos.
                    </p>
                </div>
            </div>
        </div>
    </div>

</div>
    `
    return contenedorNosotros
}

export default Nosotros